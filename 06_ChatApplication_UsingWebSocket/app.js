const express = require("express");
const path = require("path");
const app = express();

app.listen(5000, () => {  
    console.log("Server is running on port 5000");
});

app.use(express.static(path.join(__dirname, "public")));