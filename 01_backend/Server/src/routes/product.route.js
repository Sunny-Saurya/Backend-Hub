const express = require('express');
const router = express.Router();
const { addProduct } = require("../controllers/product.controller")
const upload = require('../config/cloudinary');
const { createProduct } = require('../controllers/product.controller');

router.post("/add",  createProduct);
module.exports = router;