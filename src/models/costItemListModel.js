import { mongoose } from "mongoose";

const CostItemListSchema = new mongoose.Schema({
    process : { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    title: { type: String, required: true },
    category: { type: String, required: false },
    value: { type: Number, required: true },
}, { timestamps: {} });

export default mongoose.model('CostItemList', CostItemListSchema);
