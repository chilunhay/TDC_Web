const ErrorHandler = require('../utils/errorhandler');
const catchAsyncErrors = require('../middleware/catchAsyncErrors');
const User = require('../models/userModel');
const sendToken = require('../utils/jwtToken');
const sendEmail = require('../utils/sendEmail');
const crypto = require("crypto");

// Register a User
exports.registerUser = catchAsyncErrors( async(req, res, next) => {

    const {name, email, password} = req.body;

    const user = await User.create({
        name,email,password,
        avatar:{
            public_id: "this is a sample id",
            url:"profilepicUrl"
        }
    });

    sendToken(user,201,res);
});

// Login User
exports.loginUser = catchAsyncErrors( async(req, res, next) => {


    const {email, password} = req.body;

    // checking if user has given password and user both
    if(!email || !password) {
        return next(new ErrorHandler("Hãy nhập tài khoản và mật khẩu",400));
    }

    const user = await User.findOne({ email }).select("+password");

    if(!user) {
        return next(new ErrorHandler("Không tồn tại tài khoản hoặc mật khẩu",401));
    }

    const isPasswordMatched = await user.comparePassword(password);

    if(!isPasswordMatched) {
        return next(new ErrorHandler("Không tồn tại tài khoản hoặc mật khẩu",401));
    }

    sendToken(user, 200, res);

});


// Logout User
exports.logout = catchAsyncErrors( async(req, res, next) => {

    res.cookie("token", null, {
        expires: new Date(Date.now()),
        httpOnly: true,
    });

    res.status(200).json({
        success:true,
        message:"Đăng xuất",
    });
});

// Forgot Password
exports.forgotPassword = catchAsyncErrors( async(req,res, next) => {
    const user = await User.findOne({email:req.body.email});

    if(!user){
        return next(new ErrorHandler("Không tồn tại người dùng",404));
    }

    //Get Reset Password Token
    const resetToken = user.getResetPasswordToken();

    await user.save({ validateBeforeSave:false });

    const resetPasswordUrl = `${req.protocol}://${req.get("host")}/api/v1/password/reset/${resetToken}`;

    const message = `Mã thông báo đặt lại mật khẩu của bạn là :- \n\n ${resetPasswordUrl} \n\nNếu bạn không yêu cầu email này, vui lòng bỏ qua nó `;

    try {

        await sendEmail({
            email:user.email, 
            subject:`Khôi phục mật khẩu thương mại điện tử`,
            message,
        });

        res.status(200).json({
            success: true,
            message:`Email gửi đến ${user.email} thành công`,
        })
    }
    catch (error) {
        user.resetPasswordToken = undefined;
        user.resetPasswordExpire = undefined;

        await user.save({ validateBeforeSave:false });

        return next(new ErrorHandler(error.message,500));
    }
});

// Reset Password
exports.resetPassword = catchAsyncErrors( async(req, res, next) => {

    // creating token hash
    const resetPasswordToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

    const user = await User.findOne({
        resetPasswordToken,
        resetPasswordExpire: { $gt: Date.now() },
    });

    if(!user){
        return next(new ErrorHandler("Mã đặt lại mật khẩu không hợp lệ hoặc đã hết hạn",400));
    }

    if(req.body.password !== req.body.confirmPassword){
        return next(new ErrorHandler("Mật khẩu nhập lại không đúng",400));
    }

    user.password = req.body.password;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpire = undefined;

    await user.save();

    sendToken(user , 200, res);

});

// Get User Details
exports.getUserDetails = catchAsyncErrors( async(req, res, next) => {

    const user = await User.findById(req.user.id);

    res.status(200).json({
        
    })
});