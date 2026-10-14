const dotenv = require('dotenv');
dotenv.config();

const connectDB = require('./db/db');
const app = require('./src/app.js');

connectDB();

app.listen(3000, () => {
    console.log(`Server is running at port ${process.env.PORT}`);
    
})