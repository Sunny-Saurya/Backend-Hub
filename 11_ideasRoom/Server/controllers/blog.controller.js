const blogModel = require('../model/blog.model');
const userModel = require('../model/user.model');

const blogWrite = async (req, res) => {
    try{
        const {title, content, author, tags} = req.body

        if(!title || !content || !author){
            return res.status(400).json({
                message: "All fields are required!"
            })
        }

        const newBlog = await blogModel.create({
            title,
            content,
            author:req.user.id,
            tags
        })

        return res.status(201).json({
            message: "Blog created successfully!",
            blog: newBlog
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Error creating blog",
            error: err.message
        })
    }
}

const getAllBlogs = async (req, res) => {
    try{
        const blogs = await blogModel.find().populate('author', 'username email');
        return res.status(200).json({
            message: "Blogs fetched successfully!",
            blogs
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Error fetching blogs",
            error: err.message
        })
    }
}

const getBlogById = async (req, res) => {
    try{
        const { id } = req.params;
        const blog = await blogModel.findById(id).populate('author', 'username email');
        if(!blog){
            return res.status(404).json({
                message: "Blog not found!"
            })
        }
        return res.status(200).json({
            message: "Blog fetched successfully!",
            blog
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Error fetching blog",
            error: err.message
        })
    }
}

const updateBlog = async (req, res) => {
    try{
        const { id } = req.params;

        const {title, content, tags} = req.body;

        const updatedBlog = await blogModel.findByIdAndUpdate(
            id,
            {title, content, tags},
            {
                new : true,
                runValidators: true
            }

        )
        if (!updatedBlog) {
            return res.status(404).json({
                message: "Blog not found!"
            });
        }

        return res.status(200).json({
            message: "Blog updated successfully!",
            blog: updatedBlog
        });

    } catch (err) {
        console.error(err);

        return res.status(500).json({
            message: "Something went wrong!"
        });
    }

}

const deleteBlog = async (req, res) => {
    try{
        const { id } = req.params;
        const deletedBlog = await blogModel.findByIdAndDelete(id);
        if(!deletedBlog){
            return res.status(404).json({
                message: "Blog not found!"
            })
        }

        return res.status(200).json({
            message: "Blog deleted successfully!"
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Error deleting blog",
            error: err.message
        })
    }
}

const getBlogsByAuthor = async (req, res) => {
    try{
        const { authorId } = req.params;
        const blogs = await blogModel.find({ author: authorId }).populate('author', 'username email');
        return res.status(200).json({
            message: "Blogs fetched successfully!",
            blogs
        })
    }
    catch(err){
        return res.status(500).json({
            message: "Error fetching blogs",
            error: err.message
        })
    }
}

module.exports = { blogWrite, getAllBlogs, getBlogById, updateBlog, deleteBlog, getBlogsByAuthor }