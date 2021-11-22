const mongoose = require('mongoose');

mongoose.connect("mongo://localhost:27017/Ecommerce", {useNewUrlParser: true, useUndifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log()
});