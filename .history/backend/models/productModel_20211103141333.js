const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: [true, "Vui lòng nhập tên sản phẩm"]
    },
    description: {
        type: 'string',
        required: [true, "Vui lòng nhập moo tả"]
    },
    price:{
        type: 'number',
        required: [true, "Vui lòng nhập giá"],
        maxength:
    }
})