const mongoose = require('mongoose');

const CalendarItemSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "PlanningService", required: true },
    initialDate: { type: String, required: true },
    finalDate: { type: String, required: false },
    repeat: { type: Boolean, required: true },
    repeatEvery: { type: Number, required: false}
}, { timestamps: {} });

module.exports = mongoose.model("CalendarItem", CalendarItemSchema);