import { mongoose } from "mongoose";

const SuggestionItemSchema = new mongoose.Schema({
    type: { type: String, required: true },
    title: { type: String, required: true },
    category: { type: String, required: false },
    convenient: { type: String, required: false }
}, { timestamps: {} });

export default mongoose.model('SuggestionItem', SuggestionItemSchema);
