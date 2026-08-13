const productModel = require("../models/product.model");

const createProduct = async (req, res, next) => {
    try {
        // 1. Check if a file was actually uploaded by the multer middleware
        if (!req.file) {
            return res.status(400).json({
                success: false,
                message: "Image file is required"
            });
        }

        // 2. Extract text fields from req.body
        const { name, price, stocks, category } = req.body;

        // 3. Validate text fields
        if (!name || !price || !stocks || !category) {
            return res.status(400).json({
                success: false,
                message: "All text fields (name, price, stocks, category) are required"
            });
        }

        // 4. Extract the secure 3rd-party URL provided by Cloudinary
        const imageUrl = req.file.path;

        // 5. Save everything to the database
        const newProduct = await productModel.create({
            name,
            price,
            stocks,
            category,
            image: imageUrl // Stores the live https://cloudinary.com... URL
        });

        // 6. Send successful response
        return res.status(201).json({
            success: true,
            message: "Product Added Successfully",
            newProduct
        });

    } catch (error) {
        // Safely pass any database validation errors to your error middleware
        next(error);
    }
};

module.exports = { createProduct };
