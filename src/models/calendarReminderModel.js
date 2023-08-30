import { mongoose } from "mongoose";

const CalendarReminderSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    costItemList: { type: mongoose.Schema.Types.ObjectId, ref: "CostItemList", required: true },
    initialDate: { type: String, required: true },
    finalDate: { type: String, required: false },
    repeat: { type: Boolean, required: true },
    repeatEvery: { type: Number, required: false}
}, { timestamps: {} });

export default mongoose.model("CalendarReminder", CalendarReminderSchema);