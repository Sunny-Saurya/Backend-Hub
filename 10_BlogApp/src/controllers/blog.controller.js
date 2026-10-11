const blogModel = require("../models/blog.model");

const createBlog = async (req, res) => {
    try {
        const { title, description, author, tags } = req.body;
        if(!title || !description || !author) {
            return res.status(400).json({ message: "Title, description, and author are required" });
        }

        const newBlog = new blogModel({
            title,
            description,
            author,
            tags
        });
        await newBlog.save();
        res.status(201).json(newBlog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getAllBlogs = async (req, res) => {
    try {
        const blogs = await blogModel.find();
        res.status(200).json(blogs);
    } catch (error) {   
        res.status(500).json({ message: error.message });
    }
};

const getBlogById = async (req, res) => {   
    try {
        const blog = await blogModel.findById(req.params.id).populate('author', 'username email');
        if (!blog) {
            return res.status(404).json({ message: "Blog not found" });
        }
        res.status(200).json(blog);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createBlog, getAllBlogs, getBlogById };