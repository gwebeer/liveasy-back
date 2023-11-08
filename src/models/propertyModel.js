import { mongoose } from "mongoose";

const PropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isChoosed: { type: String, required: false },    
    isCondominium: { type: String, required: true},
    score: { type: String, required: false },
    name: { type: String, required: true },
    address: { type: String, required: false },
    zipCode: { type: String, required: false },
    neighborhood: { type: String, required: false },
    type: { type: String, required: true },
    rooms: { type: String, required: true },
    bathrooms: { type: String, required: true },
    parkingSpaces: { type: String, required: true },
    infraestructure: [{ type: String, required: true }],
    furnished: { type: String, required: true },
    furniture: [{ type: String, required: false }],
    isForRent: { type: String, required: true },
    value: { type: String, required: true }
}, { timestamps: {} });

export default mongoose.model("Property", PropertySchema);