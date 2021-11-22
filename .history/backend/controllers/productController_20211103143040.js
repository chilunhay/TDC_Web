const Product = require('../models/productModel');



// Create Product
exports.createProduct = async (req, res, next) => {}


exports.getAllProducts = (req, res) => {

    res.status(200).json({message:"Route is working fine"})
}