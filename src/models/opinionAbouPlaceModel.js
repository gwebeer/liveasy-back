const mongoose = require("mongoose");

const OpinionAboutPlaceSchema = new mongoose.Schema({
    place: { type: mongoose.Schema.Types.ObjectId, ref: "Places", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    pros: { type: String, required: true },
    cons: { type: String, required: true },
}, { timestamps: {} });

module.exports = mongoose.model("OpinionAboutPlace", OpinionAboutPlaceSchema);