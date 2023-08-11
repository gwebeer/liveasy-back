const mongoose = require("mongoose");

const PlanningCostItemSchema = new mongoose.Schema({
    process : { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    title: { type: String, required: true },
    value: { type: Number, required: true },
}, { timestamps: {} });

module.exports = mongoose.model('PlanningCostItem', PlanningCostItemSchema);