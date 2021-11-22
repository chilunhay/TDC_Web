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
        District: { 
            type: String,
            required: true,
        },
        address: { 
            type: String,
            required: true,
        },
        address: { 
            type: String,
            required: true,
        },
    }
});