const mongoose = require('mongoose');

const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database Connected Successfully !!");
    }
    catch(err){
        console.log("Database Failure !!", err);
    }
}

module.exports = connectDB;