const mongoose = require("mongoose");

const IdealPropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    peopleLiving: { type: Number, required: true },
    type: { type: String, required: true },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    parkingSpaces: { type: Number, required: true },
    infraestructure: { type: Boolean, required: true },
    furnished: { type: Boolean, required: true },
    priceRange: { type: Number, required: true },
    isForRent: { type: Boolean, required: true }
}, { timestamps: {} });

module.exports = mongoose.model("IdealProperty", IdealPropertySchema);