const mongoose = require("mongoose");

const DashboardSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    choosedProperty: { type: mongoose.Schema.Types.ObjectId, ref: "ChoosedProperty", required: true }
}, { timestamps: {} });

module.exports = mongoose.model("Dashboard", DashboardSchema)