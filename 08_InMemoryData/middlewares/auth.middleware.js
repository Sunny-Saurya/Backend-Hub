const express = require('express');
const app = express();
const jwt = require("jsonwebtoken");

const authCheck = (req, res, next) => {
    const authHeader = req.headers.authorization;


    if(!authHeader) {
         return res.status(403).json({
            message:"User is unauthorised !!"
        })
    }

    const parts = authHeader.split(" ");

    if (parts.length !== 2 || parts[0] !== "Bearer") {
        return res.status(401).json({
            message: "Invalid authorization format"
        });
    }

    const token = parts[1];
    console.log("VERIFY SECRET:", process.env.JWT_SECRET);
    try {
        const decoded = jwt.verify(
            token,
            process.env.JWT_SECRET
        );

        // 6. Store authenticated user information
        req.user = decoded;

        // 7. Continue to controller
        next();

    } catch (error) {
    console.log("ERROR NAME:", error.name);
    console.log("ERROR MESSAGE:", error.message);
    console.log("TOKEN:", token);

    return res.status(401).json({
        message: "Invalid or expired token"
    });
}
}

module.exports = authCheck;