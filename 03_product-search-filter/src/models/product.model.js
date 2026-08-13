const mongoose = require("mongoose");

/*title: "iPhone 16 Pro",

    description: "Latest Apple Phone",

    category: "Mobile",

    brand: "Apple",

    price: 120000,

    rating: 4.8,

    stock: 30,

    color: "Black",

    createdAt

    */

const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    
  },
  stock: {
    type: Number,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
