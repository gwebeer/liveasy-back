const mongoose = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    process : { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    title: { type: String, required: true },
    value: { type: Number, required: true },
}, { timestamps: {} });

module.exports = mongoose.model('Service', ServiceSchema);