const mongoose = require('mongoose');

const ProcessSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true },
    step: { type: String, required: true },
    status: { type: String, required: true },
    monthly_income: { type: String, required: false },
    special_budget: { type: String, required: false },
    moving_date: { type: String, required: false },
}, { timestamps: {} });

module.exports = mongoose.model('Moves', ProcessSchema);