const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./src/db/db');
const app = express();
connectDB();

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});

