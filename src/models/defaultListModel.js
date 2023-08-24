const mongoose = require('mongoose');

// Informações de Consumos
const DefaultListSchema = new mongoose.Schema({
    item: { type: String, required: true },
    priority: { type: String, required: true },
    category: { type: String, required: true }
        
}, { timestamps: {} });

module.exports = mongoose.model('default-item', DefaultListSchema);