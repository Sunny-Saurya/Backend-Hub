const app = require("./src/app.js");
const connectDB = require("./src/db/db.js");
// app.use(express.json());

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}` );
});

        