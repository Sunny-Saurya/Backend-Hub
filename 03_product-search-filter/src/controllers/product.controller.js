const productModel = require("../models/product.model")

const productListing = async (req, res) => {
    const { title, description, category, brand, price, rating, stock, color, createdAt } = req.body;

    if(!title || !description || !category || !brand || !price || !rating || !stock || !color || !createdAt) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const product = new productModel({
        title,
        description,
        category,
        brand,
        price,
        rating,
        stock,
        color,
        createdAt
    });

    await product.save();
    res.status(201).json({ message: "Product created successfully", product });

}

const getAllProducts = async (req, res) => {
    try {
        const products = await productModel.find();
        res.status(200).json(products);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const getProductsById = async (req, res) => {
    try {
        const product = await productModel.findById(req.params.id);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }   
        else{
            res.status(200).json(product);
        }
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
};


// searching on the basis of keyword like iphone, google etc..

const getProductByKeyword =async (req, res) => {

    const {search} = req.query;


    try{
        const result = 
        await productModel.find({
    $or: [
        {
            title: {
                $regex: search,
                $options: "i"
            }
        },
        {
            category: {
                $regex: search,
                $options: "i"
            }
        },
        {
            brand: {
                $regex: search,
                $options: "i"
            }
        }
    ]
});

        if(result.length === 0){
            res.status(400).json({
                success: false,
                message: "No product found !"
            })
        }

        return res.status(200).json({
            success: true,
            message: "Product Found",
            result
        })
    }
    catch(error){
        res.status(400).json({
            message: "Error Fetching Product "
        })
    }
}

// filtering using price, rating, stock, color etc..
const filterProducts = async (req, res) => {
  try {
    const {
      minPrice,
      maxPrice,
      rating,
      stock,
      color,
    } = req.query;

    let query = {};

    // Price Filter
    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // Rating Filter
    if (rating) {
      query.rating = {
        $gte: Number(rating),
      };
    }

    // Stock Filter
    if (stock) {
      query.stock = {
        $gte: Number(stock),
      };
    }

    // Color Filter
    if (color) {
      query.color = {
        $regex: color,
        $options: "i",
      };
    }

    const result = await productModel.find(query);

    if (result.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    return res.status(200).json({
      success: true,
      totalProducts: result.length,
      data: result,
    });
  } catch (error) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: "Error fetching products",
    });
  }
};


module.exports = { productListing, getAllProducts, getProductsById , getProductByKeyword, filterProducts};