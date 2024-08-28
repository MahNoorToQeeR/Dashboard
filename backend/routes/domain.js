const express = require('express');
const router = express.Router();
const Domain = require('../models/Domain');


router.get('/all', async (req, res) => {
    try {
        let domains = await Domain.find({ status: "active" });
        res.status(201).json({ status: 1, message: 'Getting all domains!', data: domains });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    const { name, link } = req.body;

    try {
        const newDomain = new Domain({ name, link });
        let user = await newDomain.save();
        res.status(201).json({ status: 1, message: 'Domain registered successfully!', data: user });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});

router.post('/update', async (req, res) => {
    const { name, link } = req.body;
    console.log(`name: ${name}, link: ${link}`);
    if (!link) {
        return res.status(400).json({ status: 0, message: `Link is required to update domain` });
    }

    let domainExist = await Domain.find({ link: link });
    console.log(domainExist);
    if (!!domainExist) {
        return res.status(400).json({ status: 0, message: `No domain found to update` });
    }
    let domain = await Domain.findOneAndUpdate({ link: link }, { name: name }, { new: true });
    res.json({ status: 1, message: `Domain updated successfully`, data: domain });
});

router.get('/delete/:id', async (req, res) => {
    try {
        const domain = await Domain.findByIdAndDelete(req.params.id);

        if (!domain) {
            return res.status(404).json({ status: 0, message: 'Domain not found!' });
        }

        res.status(200).json({ status: 1, message: 'Domain deleted successfully!', data: domain });
    } catch (error) {
        res.status(500).json({ status: 0, error: error.message });
    }
});



module.exports = router;
