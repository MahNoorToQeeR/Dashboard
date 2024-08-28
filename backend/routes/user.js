const express = require('express');
const router = express.Router();
const passwordHash = require('password-hash');
const User = require('../models/User');
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
const path = require('path'); // Import the path module
const nodemailer = require('nodemailer');


// let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'farwayousaf53@gmail.com',
//         pass: 'lvomttsreyifoqbl'
//     }
// });

// Route for handling forgot password request
router.post('/forgotPassword', async (req, res) => {

    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!email || !user) {
        return res.status(400).json({ status: 0, message: 'User not found' });
    }
    else {
        var val = Math.floor(1000 + Math.random() * 9000);
        let newPassword = email.replaceAll('@gmail.com', '') + val.toString();
        const hashedPassword = passwordHash.generate(newPassword);

        let mailOptions = {
            from: 'farwayousuf53@gmail.com',
            to: email,
            subject: 'Password Reset Request',
            text: 'You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n'
                + 'If you did not request this, please ignore this email and your password will remain unchanged.\n Your password is ' + newPassword,
        };

        await User.findOneAndUpdate({ email: email }, { password: hashedPassword })

        // Send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.log(error);
                return res.status(500).json({ status: 0, message: 'Failed to send email' });
            }
            console.log('Message sent: %s', info.messageId);
            res.status(201).json({ status: 1, message: 'Kindly check your email for new password' });
        });
    }

});

// Get all active users
router.get('/all', async (req, res) => {
    try {
        let users = await User.find({ status: "active" });
        res.status(201).json({ status: 1, message: 'Getting all active users!', data: users });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

// Get all inactive users
router.get('/all_inactive', async (req, res) => {
    try {
        let users = await User.find({ status: "inactive" });
        res.status(201).json({ status: 1, message: 'Getting all inactive users!', data: users });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

// Get all deleted users
router.get('/all_deleted', async (req, res) => {
    try {
        let users = await User.find({ status: "deleted" });
        res.status(201).json({ status: 1, message: 'Getting all deleted users!', data: users });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});


// Delete user
router.post('/delete', async (req, res) => {
    const { email } = req.body;
    try {
        let user = await User.findOneAndUpdate({ email: email }, { status: "deleted" }, { new: true });
        res.status(201).json({ status: 1, message: 'User deleted successfully!', data: user });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});


// Update status of a user statuses could be active, inactive, deleted
router.post('/updateStatus', async (req, res) => {
    let user;
    const { email, status } = req.body;
    console.log(`email: ${email}, status: ${status}`);

    if (!email) {
        return res.status(400).json({ message: 'Email is required' });
    }

    user = await User.findOneAndUpdate({ email: email }, { status: status }, { new: true });

    console.log(user);

    res.json({ status: 1, message: `User status updated successfully`, data: user });
});

// Register user
router.post('/register', async (req, res) => {
    console.log(req.body);
    const { name, email, password, phone_no, CNIC, address, type } = req.body;

    try {
        // Hash the password
        const hashedPassword = passwordHash.generate(password);

        // Create a new user with the hashed password
        const newUser = new User({ name, email, password: hashedPassword, phone_no: phone_no, CNIC: CNIC, address: address, type: type });
        let user = await newUser.save();
        res.status(201).json({ status: 1, message: 'User registered successfully!', data: user });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

// Route to login a user
router.post('/login', async (req, res) => {
    const { email, password, type } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email, status: "active", type: type });

        if (!user) {
            return res.status(400).json({ status: 1, message: 'User not found, Or user is inactive' });
        }

        // Verify the password
        const isMatch = passwordHash.verify(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ status: 0, message: 'Invalid password' });
        }

        res.status(200).json({ status: 1, message: 'Login successful', data: user });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

// Update user profile
router.post('/updateProfile', async (req, res) => {
    let user;
    const { name, email, password, phone_no, address } = req.body;
    console.log(`email: ${email}, name: ${name}, pass: ${password}, phone_no: ${phone_no}, address: ${address}`);

    // Check if email is provided
    if (!email) {
        return res.status(400).json({ status: 0, message: 'Email is required' });
    }

    let userExist = await User.find({ email: email })
    console.log(userExist)
    if (!userExist) {
        return res.status(400).json({ status: 0, message: 'User not found to update' });
    }

    if (!password) {
        user = await User.findOneAndUpdate({ email: email }, { name: name, phone_no: phone_no, address: address }, { new: true });
    } else {
        const hashedPassword = passwordHash.generate(password);
        user = await User.findOneAndUpdate({ email: email }, { name: name, password: hashedPassword, phone_no: phone_no, address: address }, { new: true });
    }

    console.log(user);

    res.json({ status: 1, message: 'Profile updated successfully', data: user });
});

// Get offers of a user, give userId in params
router.get('/:userId/offers', async (req, res) => {
    try {
        const { userId } = req.params;

        // Find all offers assigned to this user
        const offers = await UserOffer.find({ user: userId }).populate('offer');

        if (offers.length === 0) {
            return res.status(404).json({ status: 0, message: 'No offers found for this user' });
        }

        res.status(200).json({ status: 1, message: 'Getting all offers assigned to this user!', data: offers });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});



// Multer storage configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Directory where images will be stored
    },
    filename: function (req, file, cb) {
        const randomName = uuidv4(); // Generate random name for the file
        cb(null, randomName + path.extname(file.originalname));
    },
});

const upload = multer({ storage: storage });


router.post('/uploadImage', upload.single('image'), async (req, res) => {
    try {
        // Find user by email
        const userEmail = req.body.email;
        const user = await User.findOneAndUpdate({ email: userEmail }, { image: req.file.filename });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        res.status(200).json({ status: 1, message: 'Image uploaded successfully' });
    } catch (err) {
        console.error('Error uploading image:', err);
        res.status(500).json({ status: 0, message: 'Failed to upload image' });
    }
});


module.exports = router;
