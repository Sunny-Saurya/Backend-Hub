const express = require('express');
const app = express();
app.use(express.json());
const authRoute = require('../routes/auth.route');
const blogRoute = require('../routes/blog.route');
// Auth Route
app.use('/auth/v1', authRoute)
module.exports = app;

// Blog Route
app.use('/blog/v1', blogRoute);
