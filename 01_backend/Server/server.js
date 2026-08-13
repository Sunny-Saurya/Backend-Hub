const express = require('express');
const connectDB = require('./src/db/db');
const dotenv = require('dotenv');
const app = require('./src/app');

dotenv.config();

const PORT = 5000;

connectDB();

app.listen(PORT, () => {
    console.log(`Server is UP at port ${PORT}`);
});