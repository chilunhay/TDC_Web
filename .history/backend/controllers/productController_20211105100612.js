const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const error = require('../middleware/error');
const ApiFeatures = require('../utils/apifeatures');

// Create Product -- Admin
exports.createProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product,
    });
});

// Get All Product
exports.getAllProducts = catchAsyncErrors(async(req, res) => {

    const apiFeature = new ApiFeatures(Product.find(), req.query);
    const products = await Product.find({name:});

    res.status(200).json({
        success: true,
        products,
    });
});

// Get Product Details
exports.getProductDetails = catchAsyncErrors(async (req, res, next)=>{

    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Không tồn tại sản phẩm",404));
    }

    res.status(200).json({
        success: true,
        product,
    });
});


// Update Product -- Admin

exports.updateProduct = catchAsyncErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Không tồn tại sản phẩm",404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product,
    });
});

// Delete Product -- Admin

exports.deleteProduct = catchAsyncErrors(async(req, res, next) => {
    
    const product = await Product.findById(req.params.id);

    if(!product) {
        return next(new ErrorHandler("Không tồn tại sản phẩm",404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message: "Xóa sản phẩm thành công"
    });
});

