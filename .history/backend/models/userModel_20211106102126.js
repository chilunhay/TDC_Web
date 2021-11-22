const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:[true,"Hãy điền tên của bạn"],
        maxLength:[40,"Tên không được vượt quá 40 kí tự"],
        minLength:[4]
    },

})