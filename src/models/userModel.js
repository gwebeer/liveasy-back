const mongoose = require('mongoose');

// Informações de Consumos
const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    birthDate: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: String, required: true },
    phone: { type: String, required: true}
    
}, { timestamps: {} });

module.exports = mongoose.model('User', UserSchema);