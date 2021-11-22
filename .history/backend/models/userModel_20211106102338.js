const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Hãy điền tên của bạn"],
        maxLength:[40,"Tên không được vượt quá 40 kí tự"],
        minLength:[4,"Tên không được ít hơn 4 kí tự"]
    },
    email:{
        type:String,
        required:[true,"Hãy điền email của bạn"],
        unique:true,
        validate:[validator.isEmail,"Hãy điền email hợp lệ"]
    },
    password:{
        type:String,
        required:[true,"Hãy điền mật khẩu"],
        min
    }
})