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
        type: String,
        required: [true, "Vui lòng nhập danh mục sản phẩm"],
        
    },
    Stock:{
        type: Number,
        required: [true, "Vui lòng nhập kho sản phẩm"],
        maxLength: [4, "Kho không vượt quá 4 kí tự"],
        default:1
    },
    numOfReviews:{
        type: Number,
        default:0
    },
    reviews:[true
    ]
})