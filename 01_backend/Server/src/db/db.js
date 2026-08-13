const mongoose = require("mongoose");

async function connectDB(){
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI);
        // console.log("MONGO URI", process.env.MONGO_URI);
        console.log(`Database Connected: ${conn.connection.host}`);
        
    }
    catch(err){
        console.error("Db not Connected !!");   
    }
}

module.exports = connectDB;