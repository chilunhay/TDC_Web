const mongoose =  require('mongoose');

const orderSchema = new mongoose.Schema({
    shippingInfo: {
        address: { 
            type: String,
            required: true,
        },
        city: { 
            type: String,
            required: true,
        },
        state: { 
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