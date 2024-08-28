const mongoose = require('mongoose');

const LandingPageSchema = new mongoose.Schema({
    name: { type: String, required: true },
    url: { type: String, required: true, unique: true },
});

module.exports = mongoose.model('LandingPage', LandingPageSchema);
