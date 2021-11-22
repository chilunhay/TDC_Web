const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
    name:{
        type: 'string',
        required: [true, "Vui lòng nhập tên sản phẩm"]
    },
    des
})