const express = require("express");
const { getAllProducts, c } = require('../controllers/productController');

const router=express.Router();

router.route("/products").get(getAllProducts);

module.exports = router