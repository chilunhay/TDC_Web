const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: S,
        required: [true, "Vui lòng nhập tên sản phẩm"]
    },
    description: {
        type: S,S
        required: [true, "Vui lòng nhập moo tả"]
    },
    price:{
        type: 'number',
        required: [true, "Vui lòng nhập giá"],
    },
    rating:{
        type: 'number',
        default: 0
    },
    images:{
        public_id:{
            type: S,
        }
    }
})