import { mongoose } from "mongoose";

const DashboardSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    choosedProperty: { type: mongoose.Schema.Types.ObjectId, ref: "ChoosedProperty", required: true }
}, { timestamps: {} });

export default mongoose.model("Dashboard", DashboardSchema)