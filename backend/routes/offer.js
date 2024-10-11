const express = require('express');
const router = express.Router();
const Offer = require('../models/Offer');
const Domain = require('../models/Domain');
const UserOffer = require('../models/UserOffer');
const LandingPage = require('../models/LandingPage');
const Network = require('../models/Network');
const User = require('../models/User');

// Get All Offers
router.get('/all', async (req, res) => {
    try {
        const offers = await Offer.find({});
        res.status(200).json({ status: 1, data: offers });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});


// Add Offer API
router.post('/addOffer', async (req, res) => {
    try {
        const { domain, landingpage, offerData } = req.body;
        console.log(domain, landingpage, offerData)

        const domainExists = await Domain.findById(domain);
        if (!domainExists) {
            return res.status(400).json({ status: 0, message: 'Invalid domain ID' });
        }

        const landingPageExists = await LandingPage.findById(landingpage);
        if (!landingPageExists) {
            return res.status(400).json({ status: 0, message: 'Invalid landing page ID' });
        }
        const networkExists = await Network.findById(offerData['network']);
        if (!networkExists) {
            return res.status(400).json({ status: 0, message: 'Invalid Network ID' });
        }
        const offer = new Offer({ domain, landingpage, ...offerData });
        await offer.save();
        res.status(201).json({ status: 1, message: 'Offer created successfully!', data: offer });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});


// Get All Users Assigned to a Specific Offer
router.get('/:offerId/users', async (req, res) => {
    try {
        const { offerId } = req.params;

        // Find all users assigned to this offer
        const users = await UserOffer.find({ offer: offerId }).populate('user');

        if (users.length === 0) {
            return res.status(404).json({ status: 0, message: 'No users found for this offer' });
        }

        res.status(200).json({ status: 1, message: 'Getting all users assigned to a specific offer!', data: users });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});


// Assigning offer to user
router.post('/:offerId/assign/:userId', async (req, res) => {
    try {
        const { offerId, userId } = req.params;

        // Validate offer and user existence
        const offerExists = await Offer.findById(offerId);
        const userExists = await User.findById(userId);

        if (!offerExists) {
            return res.status(400).json({ status: 0, message: 'Invalid offer ID' });
        }
        if (!userExists) {
            return res.status(400).json({ status: 0, message: 'Invalid user ID' });
        }

        const userOffer = new UserOffer({ user: userId, offer: offerId });
        await userOffer.save();

        res.status(201).json({ status: 1, message: 'Offer assigned to user successfully!', data: userOffer });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Update offer status by ID
router.post('/offers/:id/status', async (req, res) => {
    try {
        const offerId = req.params.id;
        const { status } = req.body;

        // Validate status value
        if (!status) {
            return res.status(400).json({ message: 'Status is required' });
        }

        const updatedOffer = await Offer.findByIdAndUpdate(
            offerId,
            { status },
            { new: true, runValidators: true } // Returns the updated document
        );

        if (!updatedOffer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: 'Offer status updated successfully', updatedOffer });
    } catch (error) {
        res.status(500).json({ message: 'Error updating offer status', error });
    }
});

// Update an offer by ID
router.post('/offers/:id', async (req, res) => {
    try {
        const offerId = req.params.id;
        const updatedData = req.body;

        const updatedOffer = await Offer.findByIdAndUpdate(
            offerId,
            updatedData,
            { new: true, runValidators: true } 
        );

        if (!updatedOffer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: 'Offer updated successfully', updatedOffer });
    } catch (error) {
        res.status(500).json({ message: 'Error updating offer', error });
    }
});

// Delete an offer by ID
router.post('/offers/delete/:id', async (req, res) => {
    try {
        const offerId = req.params.id;
        const deletedOffer = await Offer.findByIdAndDelete(offerId);
        
        if (!deletedOffer) {
            return res.status(404).json({ message: 'Offer not found' });
        }

        res.status(200).json({ message: 'Offer deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting offer', error });
    }
});



module.exports = router;
