const mongoose = require('mongoose');

mongoose.connect(process.env.DB_, {useNewUrlParser: true, useUndifiedTopology: true, useCreateIndex: true}).then(()=>{
    console.log(`Mongodb connected with server: ${data.connection.host}`);
}).catch((err)=>{
    console.log(err)
});