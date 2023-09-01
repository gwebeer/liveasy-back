import { mongoose } from "mongoose";

const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    property: { type: mongoose.Schema.Types.ObjectId, ref: "Property", required: false },
    status: { type: String, required: true },    
    income: { type: Number, required: true },
    budget: { type: Number, required: false },
    movingDate: { type: String, required: true }
}, { timestamps: {} });

export default mongoose.model('Process', ProcessSchema); 