const catchAsyncErrors = require("./catchAsyncErrors");


const isAuthenticatedUser = catchAsyncErrors(async(req))