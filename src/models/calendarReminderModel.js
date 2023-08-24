const mongoose = require('mongoose');

const CalendarReminderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    costItemList: { type: mongoose.Schema.Types.ObjectId, ref: "CostItemList", required: true },
    initialDate: { type: String, required: true },
    finalDate: { type: String, required: false },
    repeat: { type: Boolean, required: true },
    repeatEvery: { type: Number, required: false}
}, { timestamps: {} });

module.exports = mongoose.model("CalendarReminder", CalendarReminderSchema);