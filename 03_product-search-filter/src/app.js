const express = require("express");
const app = express();

const productRoutes = require("./routes/product.route");

app.use(express.json());

app.use("/api", productRoutes);

module.exports = app;