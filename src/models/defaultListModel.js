const mongoose = require('mongoose');

const DefaultListSchema = new mongoose.Schema({
    option: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: false },
    convenient: { type: String, required: false }
}, { timestamps: {} });

module.exports = mongoose.model('default-item', DefaultListSchema);