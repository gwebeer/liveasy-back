const mongoose = require('mongoose');

const CustomItemSchema = new mongoose.Schema({
    process: { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    convenient: { type: String, required: true },
    title: { type: String, required: true },
    priority: { type: String, required: true },
    value: { type: String, required: true },
    bought: { type: Boolean, required: true },
    valuePaid: { type: Number, required: false },
    boughtDate: { type: String, required: false }
}, { timestamps: {} });

module.exports = mongoose.model('CustomItem', CustomItemSchema);