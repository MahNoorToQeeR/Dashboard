const express = require('express');
const router = express.Router();
const LandingPage = require('../models/LandingPage');


// Create a new landing page
router.post('/create', async (req, res) => {
    console.log(req.body)

    try {
        const { name, url } = req.body;
        const newLandingPage = new LandingPage({ name, url });
        await newLandingPage.save();
        res.status(201).json({ status: 1, message: 'Landing page created successfully!', data: newLandingPage });
    } catch (error) {
        console.log(error)
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Get all landing pages
router.get('/all', async (req, res) => {
    try {
        const landingPages = await LandingPage.find();
        res.status(200).json({ status: 1, data: landingPages });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Get a single landing page by ID
router.get('/get/:id', async (req, res) => {
    console.log(req.params)
    try {
        const landingPage = await LandingPage.findById(req.params.id);
        if (!landingPage) {
            return res.status(404).json({ status: 0, message: 'Landing page not found' });
        }
        res.status(200).json({ status: 1, data: landingPage });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Update a landing page by ID
router.post('/update/:id', async (req, res) => {
    try {
        const { name, url } = req.body;
        const updatedLandingPage = await LandingPage.findByIdAndUpdate(
            req.params.id,
            { name, url },
            { new: true }
        );
        if (!updatedLandingPage) {
            return res.status(404).json({ status: 0, message: 'Landing page not found' });
        }
        res.status(200).json({ status: 1, message: 'Landing page updated successfully!', data: updatedLandingPage });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Delete a landing page by ID
router.get('/delete/:id', async (req, res) => {
    console.log(req.params.id);
    try {
        const deletedLandingPage = await LandingPage.findByIdAndDelete(req.params.id);
        if (!deletedLandingPage) {
            return res.status(404).json({ status: 0, message: 'Landing page not found' });
        }
        res.status(200).json({ status: 1, message: 'Landing page deleted successfully!' });
    } catch (error) {
        res.status(500).json({ status: 0, message: error.message });
    }
});

module.exports = router;
