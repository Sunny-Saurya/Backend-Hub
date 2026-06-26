const client = require('./client');

async function init(){
    // to set something like user or message you can do

    await client.hset("user:1", "name", "John Doe");
    await client.hset("user:1", "email", "Sunny");
    await client.hset("user:1", "age", "25");
    await client.hset("user:1", "country", "USA");

    // to expire any key or message or user

    // await client.expire("user:1", 10);

    // to get the key or message
    const result = await client.hgetall("user:1");
    console.log(result);
}

init();