const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Vui lòng nhập tên sản phẩm"]
    },
    description: {
        type: String,
        required: [true, "Vui lòng nhập moo tả"]
    },
    price:{
        type: N,
        required: [true, "Vui lòng nhập giá"],
    },
    rating:{
        type: N,
        default: 0
    },
    images:{
        public_id:{
            type: String,
        }
    }
})