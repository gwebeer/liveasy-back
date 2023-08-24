const mongoose = require('mongoose');

const PropertyItemSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
    title: { type: String, required: true },
    convenient: { type: String, required: true }
}, { timestamps: {} });

module.exports = mongoose.model('PropertyItem', PropertyItemSchema);