const mongoose = require('mongoose');

const CalendarItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    planningCostItem: { type: mongoose.Schema.Types.ObjectId, ref: "PlanningCostItem", required: true },
    initialDate: { type: String, required: true },
    finalDate: { type: String, required: false },
    repeat: { type: Boolean, required: true },
    repeatEvery: { type: Number, required: false}
}, { timestamps: {} });

module.exports = mongoose.model("CalendarItem", CalendarItemSchema);