import { mongoose } from "mongoose";

const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    step: { type: String, required: true },
    status: { type: String, required: true },    
}, { timestamps: {} });

export default mongoose.model('Moves', ProcessSchema);