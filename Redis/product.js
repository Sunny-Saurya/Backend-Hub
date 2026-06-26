const express = require('express');
const app = express();
const axios = require('axios');
const client = require('./client')

const port = 9000;
const url = "https://dummyjson.com/products";

app.get((req, res) => {
  res.send('server is up !!');
});

app.get("/products", async (req, res) => {


    try{
        // checking is data cashed 

        const isCashed = await client.get('products');
        if(isCashed){
            console.log('Cache HIT');
            return res.json(JSON.parse(isCashed));
        } 
        
        console.log("Cache Miss");
        const {data} = await axios.get(url);
    
        await client.set('products', JSON.stringify(data));
        // await client.expire('products', 50);
        res.json(data);
    }
    catch(err){
    console.error(err.message);
}
    // console.log(data);

})

app.listen(port)