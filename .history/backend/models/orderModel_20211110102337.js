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
    orderItems: { 
        name: { 
            ty
        }
    }
});