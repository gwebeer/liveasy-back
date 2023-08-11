const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
    process: { type: mongoose.Schema.Types.ObjectId, ref: "Process", required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "Users", required: true }
}, { timestamps: {} });

module.exports = mongoose.model("Dashboard", DashboardSchema)