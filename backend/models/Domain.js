const mongoose = require('mongoose');

const DomainSchema = new mongoose.Schema({
    name: { type: String, required: true },
    link: { type: String, required: true, unique: true },
    status: { type: String, required: true, default: "active" }
});

module.exports = mongoose.model('Domain', DomainSchema);
