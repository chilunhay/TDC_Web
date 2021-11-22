const ErrorHandler = require("../utils/errorhandler");

module.exports = (err,req,res,next)=>{

    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";


    // Wrong Mongodb Id Error
    if(err.name === "CastError"){
        const message = `Nguồn tài nguyên không được tìm thấy. Không hợp lệ: ${err.path}`;
        err = new ErrorHandler(message, 400);
    }

    //Mongoose duplicate key error
    if(err.code === 11000){
        const message = `Đã nhập ${Object.keys(err.keyValue)} trùng lặp`;
        err = new ErrorHandler(message, 400);
    }

    // Wrong JWT error
    if(err.name === "JsonWebTokenError"){
        const message = `Đã nhập ${Object.keys(err.keyValue)} trùng lặp`;
        err = new ErrorHandler(message, 400);
    }

    res.status(err.statusCode).json({
        success:false,
        message:err.message,
    });
};