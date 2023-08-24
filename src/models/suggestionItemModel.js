const mongoose = require('mongoose');

const SuggestionItemSchema = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    convenient: { type: String, required: false }
}, { timestamps: {} });

module.exports = mongoose.model('SuggestionItem', SuggestionItemSchema);