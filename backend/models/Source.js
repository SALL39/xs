const mongoose = require("mongoose");

const SourceSchema = new mongoose.Schema({
  name: String,
  url: String,
  type: String,
  status: { type: String, enum: ["active", "inactive"], default: "active" },
});

module.exports = mongoose.model("Source", SourceSchema);
