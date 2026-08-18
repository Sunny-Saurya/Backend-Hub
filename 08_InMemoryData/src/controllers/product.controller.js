const Product = require("../../data/product");

const products = (req, res) => {
    return res.status(200).json({
        message: "Product List",
        products: Product
    });
};

module.exports = { products };