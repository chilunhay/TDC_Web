const ErrorHandler = require("../utils/errorhandler");
const catchAsyncErrors = require("./catchAsyncErrors");


exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next) => {

    const { token } = req.cookies;
    
    if(!token){
        return next(new ErrorHandler(""));
    }
})