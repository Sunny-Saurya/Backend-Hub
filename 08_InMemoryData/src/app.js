const express = require('express')
const app = express();
const authRoutes = require('./routes/auth.route')
const productRoutes = require("./routes/product.route")
const authMiddleware = require("../middlewares/auth.middleware")
app.use(express.json());


// user routes
app.use("/api/user", authRoutes);
app.use("/api/product", authMiddleware, productRoutes);

module.exports = app;