const mongoose = require('mongoose');

const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    step: { type: String, required: true },
    status: { type: String, required: true },    
}, { timestamps: {} });

module.exports = mongoose.model('Moves', ProcessSchema);