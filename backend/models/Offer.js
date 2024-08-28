const mongoose = require('mongoose');

// Define the Offer schema
const OfferSchema = new mongoose.Schema({
    offer_name: { type: String, required: true },
    default_offer: { type: String, required: true },
    domain: { type: mongoose.Schema.Types.ObjectId, ref: 'Domain', required: true },
    network: { type: String, required: true },
    landingpage: { type: mongoose.Schema.Types.ObjectId, ref: 'LandingPage', required: true },
    countries: { type: String, required: true },
    offer_rate: { type: String, required: true },
    comment: { type: String, required: true },
    web_offer: { type: String, required: true },
    android_offer: { type: String, required: true },
    ios_offer: { type: String, required: true },
    divert_offer: { type: String, required: true },
    referral_status: { type: String, required: true },
    proxy_status: { type: String, required: true },
    devices: { type: String, required: true },
    status: { type: String, required: true, default: "active" }
});

const Offer = mongoose.model('Offer', OfferSchema);

module.exports = Offer;
