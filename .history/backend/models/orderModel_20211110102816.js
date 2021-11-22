const mongoose =  require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: { 
            type: String,
            required: true,
        },
        province: { 
            type: String,
            required: true,
        },
        district: { 
            type: String,
            required: true,
        },
        wards: { 
            type: String,
            required: true,
        },
        phoneNo: { 
            type: Number,
            required: true,
        },
    },
    orderItems: [
        { 
            name: { 
                type: String,
                required: true,
            },
            price: { 
                type: Number,
                required: true,
            },
            quantity: { 
                type: Number,
                required: true,
            },
            image: { 
                type: String,
                required: true,
            },
            product: { 
                type: mongoose.Schema.ObjectId,
                ref: "Product",
                required: true,
            },
        },
    ],
    user: {
        type: mongoose.Schema.ObjectId,
        ref: "User",
        required: true,
    },
    paymentInfo: {
        id: {
            type: String,
            required: true,
        },
        status: {
            type: String,
            required: true,
        },
    },
    paidAt: {
        
    }
});