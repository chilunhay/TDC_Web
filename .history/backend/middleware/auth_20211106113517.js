const catchAsyncErrors = require("./catchAsyncErrors");


const isAuthenticatedUser = catchAsyncErrors(async(req,res,next) => {

    const token =cookie;
})