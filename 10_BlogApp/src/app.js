const express = require('express');
const app = express();
const authRoutes = require('./routes/auth.route');
const blogRoutes = require('./routes/blog.route');
app.use(express.json());

// user routes
app.use('/api/auth', authRoutes);

// Blog routes
app.use('/api/blog', blogRoutes);

module.exports = app;