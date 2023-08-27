import { mongoose } from "mongoose";

const GiveUpPropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
    reason: { type: String, required: true }
}, { timestamps: {} }); 

export default mongoose.model("GiveUpProperty", GiveUpPropertySchema);