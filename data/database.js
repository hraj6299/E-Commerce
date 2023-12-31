const mongodb = require('mongodb');

const MongoClient = mongodb.MongoClient;

let database;

let mongodbUrl='mongodb://0.0.0.0:27017';

if(process.env.MONGODB_URL){
  mongodbUrl=process.env.MONGODB_URL;
}

async function connectToDatabase() {
  const client = await MongoClient.connect('mongodb+srv://default:testers@cluster0.meakhp4.mongodb.net/?retryWrites=true&w=majority');
  database = client.db('online-shop');
}

function getDb() {
  if (!database) {
    throw new Error('You must connect first!');
  }

  return database;
}

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb
};