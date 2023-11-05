import { mongoose } from "mongoose";

const PropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isChoosed: { type: Boolean, required: false },    
    isCondominium: { type: Boolean, required: true},
    score: { type: Number, required: false },
    name: { type: String, required: true },
    address: { type: String, required: false },
    zipCode: { type: String, required: false },
    neighborhood: { type: String, required: false },
    type: { type: String, required: true },
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    parkingSpaces: { type: Number, required: true },
    infraestructure: { type: Boolean, required: true },
    furnished: { type: Boolean, required: true },
    furniture: [{ type: String, required: false }],
    isForRent: { type: Boolean, required: true },
    value: { type: Number, required: true }
}, { timestamps: {} });

export default mongoose.model("Property", PropertySchema);