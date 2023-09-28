import { mongoose } from "mongoose";

const IdealPropertySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    isForRent: { type: Boolean, required: true },
    propertyType: { type: String, required: true },
    isCondominium: { type: Boolean, required: true},
    rooms: { type: Number, required: true },
    bathrooms: { type: Number, required: true },
    parkingSpaces: { type: Number, required: true },
    infraestructure: { type: Array, required: true },
    furnished: { type: Boolean, required: true },
    priceRange: { type: Number, required: false }
}, { timestamps: {} });

export default mongoose.model("IdealProperty", IdealPropertySchema);