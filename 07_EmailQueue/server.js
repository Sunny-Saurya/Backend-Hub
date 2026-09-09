const express = require('express');
const dotenv = require('dotenv');
dotenv.config();

const connectDB = require("./src/db/db.js");   
const app = require('./src/app.js');

require("./src/config/redis.js");

connectDB();

app.listen((5000), () => {
    console.log('Server is running on port 5000');
}) 
