import { mongoose } from "mongoose";

const CalendarReminderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    // costItemList: { type: mongoose.Schema.Types.ObjectId, ref: "CostItemList", required: true },
    title: { type: String, required: true },
    start: { type: String, required: true },
    end: { type: String, required: false },
    allDay: { type: Boolean, required: true },
}, { timestamps: {} });

export default mongoose.model("CalendarReminder", CalendarReminderSchema);