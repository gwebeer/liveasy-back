const mongoose = require('mongoose');

const DefaultListSchema = new mongoose.Schema({
    option: { type: String, required: true },
    title: { type: String, required: true },
    priority: { type: String, required: false },
    category: { type: String, required: false }
}, { timestamps: {} });

module.exports = mongoose.model('default-item', DefaultListSchema);