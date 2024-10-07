const express = require('express');
const router = express.Router();
const Network = require('../models/Network'); 

// Create a new network
router.post('/create', async (req, res) => {
    console.log(req.body);
    try {
        const { network_name, network_url, pramameter_1, pramameter_2 } = req.body;
        const newNetwork = new Network({ network_name, network_url, pramameter_1, pramameter_2 });
        await newNetwork.save();
        res.status(201).json({ status: 1, message: 'Network created successfully!', data: newNetwork });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Read all networks
router.get('/all', async (req, res) => {
    try {
        const networks = await Network.find();
        res.status(200).json({ status: 1, message: 'Networks retrieved successfully!', data: networks });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Read a network by ID
router.get('/get/:id', async (req, res) => {
    try {
        const network = await Network.findById(req.params.id);
        if (!network) {
            return res.status(404).json({ status: 0, message: 'Network not found' });
        }
        res.status(200).json({ status: 1, message: 'Network retrieved successfully!', data: network });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Update a network by ID
router.post('/update/:id', async (req, res) => {
    console.log(req.body);
    try {
        const { network_name, network_url, pramameter_1, pramameter_2 } = req.body;
        const updatedNetwork = await Network.findByIdAndUpdate(req.params.id, 
            { network_name, network_url, pramameter_1, pramameter_2 },
            { new: true, runValidators: true }
        );

        if (!updatedNetwork) {
            return res.status(404).json({ status: 0, message: 'Network not found' });
        }

        res.status(200).json({ status: 1, message: 'Network updated successfully!', data: updatedNetwork });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: error.message });
    }
});

// Delete a network by ID
router.post('/delete/:id', async (req, res) => {
    try {
        const deletedNetwork = await Network.findByIdAndDelete(req.params.id);
        if (!deletedNetwork) {
            return res.status(404).json({ status: 0, message: 'Network not found' });
        }
        res.status(204).json({ status: 1, message: 'Network deleted successfully!' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ status: 0, message: error.message });
    }
});

module.exports = router;