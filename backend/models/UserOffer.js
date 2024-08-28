const mongoose = require('mongoose');

const UserOfferSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    offer: { type: mongoose.Schema.Types.ObjectId, ref: 'Offer', required: true },
    offer_status: { type: String, required: true, default: "Empty" },
    assignedAt: { type: Date, default: Date.now }
});

const UserOffer = mongoose.model('UserOffer', UserOfferSchema);

module.exports = UserOffer;
