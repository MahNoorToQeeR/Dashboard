const mongoose = require('mongoose');

const NetworkSchema = new mongoose.Schema({
    network_name: { type: String, required: true },
    network_url: { type: String, required: true, unique: true },
    pramameter_1: { type: String },
    pramameter_2: { type: String },
});

module.exports = mongoose.model('Network', NetworkSchema);
