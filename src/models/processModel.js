const mongoose = require('mongoose');

// Informações de Consumos
const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    initialStatus: { type: String, required: true },
    currentStatus: { type: String, required: true },
    finishDate: { type: String, required: true },
    budget: {type: Float64Array, required: false}
    
}, { timestamps: {} });

module.exports = mongoose.model('Moves', ProcessSchema);