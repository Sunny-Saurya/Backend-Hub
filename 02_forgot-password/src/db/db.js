// const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();


// const connectDB = async () => {
//   try {
//     await mongoose.connect(process.env.MONGO_URI);
//     console.log('MongoDB connected');
//   } catch (error) {
//     console.error('MongoDB connection error:', error);
//     process.exit(1);
//   }
// };

// module.exports = connectDB;


const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    console.log(process.env.MONGO_URI);

    await mongoose.connect(process.env.MONGO_URI, {
      serverSelectionTimeoutMS: 5000,
    });

    console.log("MongoDB Connected");
  } catch (err) {
    console.error(err);
  }
};

module.exports = connectDB;