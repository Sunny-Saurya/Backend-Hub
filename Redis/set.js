const client = require('./client');

async function init(){
    // to set something like user or message you can do

    await client.set("ip", "192.168.1.1");
    await client.set("ip", "192.168.1.2");
    await client.set("ip", "192.177.1.4");
    await client.set("ip", "192.177.1.3");


    // to expire any key or message or user

    // await client.expire("msg:5", 10);

    // to get the key or message
    const result = await client.get("ip");
    console.log(result);
}

init();