const Order = require('../models/orderModel');
const Product = require('../models/productModel');
const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');

// Create new Order
exports.newOrder = catchAsyncErrors( async(req, res, next) => {

    const {
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        paymentInfo,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        order,
    });
});

// Get Single Order
exports.getSingleOrder = catchAsyncErrors( async(req, res, next) => {

    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );

    if(!order) {
        return next(new ErrorHandler("Không tìm thấy đơn đặt hàng với Id này",404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});

// Get logged in user Orders
exports.myOrder = catchAsyncErrors( async(req, res, next) => {

    const order = await Order.findById({
        user: req.user._id,
        
    });

    if(!order) {
        return next(new ErrorHandler("Không tìm thấy đơn đặt hàng với Id này",404));
    }

    res.status(200).json({
        success: true,
        order,
    });
});