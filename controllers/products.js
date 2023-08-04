const Product = require("../models/product.js");

const getAllProductsStatic = async (req, res) => {
res.status(200).json({msg: "success", data: products})
}

const getAllProducts = async (req, res) => {
res.status(200).json({msg: "success", data: products})
}

module.exports={getAllProductsStatic, getAllProducts};