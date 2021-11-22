const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Vui lòng nhập tên sản phẩm"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Vui lòng nhập moo tả"]
    },
    price:{
        type: Number,
        required: [true, "Vui lòng nhập giá"],
    },
    rating:{
        type: Number,
        default: 0
    },
    images:[
        {
            public_id:{
                type: String,
                required: true
            },
            url:{
                type: String,
                required: true
            }
        }
    ],
    category:{
        
    }
})