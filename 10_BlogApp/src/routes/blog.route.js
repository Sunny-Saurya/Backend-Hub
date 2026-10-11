const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blog.controller");

router.post("/create", blogController.createBlog);
router.get("/all", blogController.getAllBlogs);
router.get("/id/:id", blogController.getBlogById);

module.exports = router;