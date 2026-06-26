const client = require('./client');

async function init(){
    // to set something like user or message you can do

    await client.set("msg:5", "Hello from Nodejs Server");

    // to expire any key or message or user

    await client.expire("msg:5", 10);

    // to get the key or message
    const result = await client.get("user:2");
    console.log(result);
}

init();

