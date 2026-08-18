const express = require('express')

const router = express.Router();

const authProduct = require('../controllers/product.controller')
router.get('/products', authProduct.products)

module.exports = router