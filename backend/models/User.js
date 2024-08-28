const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone_no: { type: String, required: true },
    CNIC: { type: String, required: true, unique: true },
    image: { type: String },
    status: { type: String, required: true, default: "active" }, // can be active, inactive, deleted
    address: { type: String, required: true },
    type: { type: String, required: true, default: "user" }
});

module.exports = mongoose.model('User', UserSchema);
