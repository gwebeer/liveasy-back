const mongoose = require('mongoose');

// Informações de Consumos
const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    step: { type: String, required: true },
    status: { type: String, required: true },
    renda_mensal: { type: String, required: false },
    orcamento_especial: { type: String, required: false },
    data_mudanca: { type: Date, required: false },
    
}, { timestamps: {} });

module.exports = mongoose.model('Moves', ProcessSchema);