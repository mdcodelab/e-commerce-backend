const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "product name must be maximum 20 characters long "],
  },
  price: {
    type: Number,
    required: [true, "product price must be provided"],
  },
  featured: {
    type: Boolean,
    default: false,
    required: [true, "product name must be maximum 20 characters long "],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  company: {
    type: String,
    enum: {
      values: ["ikea", "liddy", "marcos", "caressa"],
      message: `{VALUE} is not supported`
    }
  },
});

module.exports=mongoose.model("Products", productSchema);