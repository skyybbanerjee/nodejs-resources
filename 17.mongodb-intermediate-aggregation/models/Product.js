//Product Model

const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  name: { type: String, required: true },
  category: { type: String },
  price: { type: Number, required: true },
  quantity: { type: Number, required: true, min: 0 },
  inStock: { type: Boolean, required: true },
  tags: [String],
});

module.exports = mongoose.model("Product", ProductSchema);
