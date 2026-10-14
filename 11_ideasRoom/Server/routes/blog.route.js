const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth.middleware');
const {
    blogWrite,
    getAllBlogs,
    getBlogById,
    updateBlog,
    deleteBlog,
    getBlogsByAuthor
} = require('../controllers/blog.controller');

// Blog Routes
router.post('/write',authMiddleware ,blogWrite);
router.get('/all', authMiddleware, getAllBlogs);
router.get('/:id', authMiddleware, getBlogById);
router.put('/:id', authMiddleware, updateBlog);
router.delete('/:id', authMiddleware, deleteBlog);
router.get('/author/:authorId', authMiddleware, getBlogsByAuthor);

module.exports = router;