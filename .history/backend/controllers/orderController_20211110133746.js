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

    const orders = await Order.find({ user: req.user._id });


    res.status(200).json({
        success: true,
        orders,
    });
});


// Get All Orders -- Admin
exports.getAllOrders = catchAsyncErrors( async(req, res, next) => {

    const orders = await Order.find();

    let totalAmount = 0;

    orders.forEach((order)=> {
        totalAmount += order.totalPrice;
    });


    res.status(200).json({
        success: true,
        totalAmount,
        orders,
    });
});

// Update Orders Status -- Admin
exports.updateOrder = catchAsyncErrors( async(req, res, next) => {

    const orders = await Order.find(req.params.id);

    if(order.orderStatus === "Delivered"){
        return next(new ErrorHandler("You have already delivered this order",400));
    }

    order.orderItems.forEach( async(order)=>{
        await updateStock(order.Product, order.quantity);
    })

    order.orderStatus = req.body.status;
    
    if(req.order.status === "Delivered"){
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave:false });
    res.status(200).json({
        success: true,
    });
});

async function updateStock(id, quantity){
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save({ validateBeforeSave:false });
}