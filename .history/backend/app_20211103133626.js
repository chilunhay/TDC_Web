const express = require('express');
const app = express();

app

//Route Imports
const product = require("./routes/productRoute");

app.use("api/v1", product);

module.exports = app