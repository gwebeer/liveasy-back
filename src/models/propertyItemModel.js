import { mongoose } from "mongoose";

const PropertyItemSchema = new mongoose.Schema({
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    convenient: { type: String, required: true }
}, { timestamps: {} });

export default mongoose.model('PropertyItem', PropertyItemSchema);
