const express = require("express");
const app = express();

const errorMiddle

app.use(express.json())

//Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

// Middleware For Errors


module.exports = app