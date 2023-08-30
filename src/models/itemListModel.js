import { mongoose } from "mongoose";

const ItemListSchema = new mongoose.Schema({
    process: { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    convenient: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: true },
    priority: { type: String, required: true },
    value: { type: Number, required: true },
    bought: { type: Boolean, required: true },
    valuePaid: { type: Number, required: false },
    boughtDate: { type: String, required: false }
}, { timestamps: {} });

export default mongoose.model('ItemList', ItemListSchema);
