const express = require("express");
const axios = require("axios");
const client = require("./client");

const app = express();
const port = 9000;

app.use(express.json());

const url = "https://jsonplaceholder.typicode.com/todos";

app.get("/", async (req, res) => {
    try {
        const cashedValue = await client.get('todos');
        if(cashedValue) return res.json(JSON.parse(cashedValue));


        const { data } = await axios.get(url);

        await client.set('todos', JSON.stringify(data));
        await client.expire('todos', 40);
        res.json(data);

    } catch (err) {
        console.error(err.message);
        res.status(500).json({
            message: "Something went wrong"
        });
    }
});

app.listen(port, () => {
    console.log(`Server is Running at Port ${port}`);
});