const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

router.post("/products", productController.productListing);
router.get("/get-products", productController.getAllProducts);
router.get("/get-products/:id", productController.getProductsById);

// searching using keyword;

router.get("/products-keyword", productController.getProductByKeyword);
// filtering products;

router.get("/filter-products", productController.filterProducts);   
module.exports = router;