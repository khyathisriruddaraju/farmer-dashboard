const mongoose = require("mongoose");

const cropSchema = new mongoose.Schema({
  cropName: String,
  quantity: Number,
  price: Number,
  userId: mongoose.Schema.Types.ObjectId
});

module.exports = mongoose.model("Crop", cropSchema);
