const mongoose = require('mongoose');

const ItemListSchema = new mongoose.Schema({
    title: { type: String, required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true },
    convenient: { type: String, required: true },
    value: { type: String, required: true },
    bought: { type: Boolean, required: true },
    proccess: { type: mongoose.Schema.Types.ObjectId, ref: "moves", required: true },
}, { timestamps: {} });

module.exports = mongoose.model('item-list', ItemListSchema);