const mongoose = require("mongoose");

const PlaceSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    zipCode: { type: String, required: true },
    neighborhood: { type: String, required: true },
    condominiumValue : { type: String, required: true },
}, { timestamps: {} });

module.exports = mongoose.model("Place", PlaceSchema);