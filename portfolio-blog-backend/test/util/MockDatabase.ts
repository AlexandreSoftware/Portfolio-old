
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
let mongod ;
async function checkOrCreateServer(){
    if(mongod==undefined){ 
        mongod = await MongoMemoryServer.create();
    }
}

/**
 * Connect to the in-memory database.
 */
let connect = async () => {
    await checkOrCreateServer()
    const uri = await mongod.getUri();
    
    const mongooseOpts = {
        useNewUrlParser: true,
        autoReconnect: true,
        reconnectTries: Number.MAX_VALUE,
        reconnectInterval: 1000
    };

    await mongoose.connect(uri);
}

/**
 * Drop database, close the connection and stop mongod.
 */
let closeDatabase = async () => {
    await checkOrCreateServer();
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongod.stop();
}

/**
 * Remove all the data for all db collections.
 */
let clearDatabase = async () => {
    await checkOrCreateServer();
    const collections = mongoose.connection.collections;
    for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany();
    }
}

export {connect,clearDatabase,closeDatabase} 