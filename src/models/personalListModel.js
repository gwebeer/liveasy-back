const mongoose = require('mongoose');

// Informações de Consumos
const PersonalListSchema = new mongoose.Schema({
    item: { type: String, required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true },
    value: { type: String, required: true },
    bought: { type: Boolean, required: true },
    proccess: { type: mongoose.Schema.Types.ObjectId, ref: "moves", required: true },
}, { timestamps: {} });

module.exports = mongoose.model('personal-item', PersonalListSchema);