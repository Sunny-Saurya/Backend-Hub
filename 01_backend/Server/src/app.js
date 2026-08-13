const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const authUser = require("./routes/auth.route");
const authProduct = require("./routes/product.route");

app.use("/api/user", authUser);
app.use("/api/product", authProduct);

module.exports = app;