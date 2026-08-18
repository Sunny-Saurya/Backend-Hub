const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const app = require('./src/app')

app.use(express.json());

app.listen(5000, () => {
    console.log(`Server is Running on port ${5000}`)
})