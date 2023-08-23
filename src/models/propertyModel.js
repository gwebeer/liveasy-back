const mongoose = require("mongoose");

const PropertySchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    zipCode: { type: String, required: true },
    neighborhood: { type: String, required: true },
    type: { type: String, required: true },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    parkingSpaces: { type: Number, required: true },
    infraestructure: { type: Boolean, required: true },
    furnished: { type: Boolean, required: true },
    priceRange: { type: Number, required: true },
    isForRent: { type: Boolean, required: true },
    value: { type: Number, required: true }
}, { timestamps: {} });

module.exports = mongoose.model("Property", PropertySchema);