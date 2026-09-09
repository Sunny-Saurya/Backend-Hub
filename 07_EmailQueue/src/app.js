const express = require('express');
const formRoutes = require('./routes/form.route');
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());



app.use("/api/form", formRoutes);

module.exports = app;