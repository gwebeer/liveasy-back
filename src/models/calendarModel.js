const mongoose = require('mongoose');

const CalendarSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    service: { type: mongoose.Schema.Types.ObjectId, ref: "PlanningService", required: true },
    initialDate: { type: Date, required: true },
    finalDate: { type: Date, required: false },
    repeat: { type: Boolean, required: true },
    repeatEvery: { type: Int16Array, required: false}
}, { timestamps: {} });

module.exports = mongoose.model("Calendar", CalendarSchema);