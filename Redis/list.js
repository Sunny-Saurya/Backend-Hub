const client = require('./client');

async function init(){
    // lpush a value to the list
    await client.lpush("list:1", "Hello from Nodejs Server");
    await client.lpush("list:1", "Hello from Nodejs Server 2");
    await client.lpush("list:1", "Hello from Nodejs Server 3");


    // rpush a value to the list
    await client.rpush("list:1", "Hello from Nodejs Server 4");
    await client.rpush("list:1", "Hello from Nodejs Server 5");
    await client.rpush("list:1", "Hello from Nodejs Server 6");

    // to expire any key or message or user

    // await client.expire("list:1", 10);

    // to get the key or message
    const result = await client.lrange("list:1", 0, -1);

    // to pop a value from the list
    await client.lpop("list:1");
    

    console.log(result);
}

init();