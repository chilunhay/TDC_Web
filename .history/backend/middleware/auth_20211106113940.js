const catchAsyncErrors = require("./catchAsyncErrors");


exports.isAuthenticatedUser = catchAsyncErrors(async(req,res,next) => {

    const { } = req.cookies;
    
    console.log(token);
})