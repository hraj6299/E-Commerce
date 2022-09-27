const expressSession = require('express-session');
const mongoDbStore = require('connect-mongodb-session');

let mongodbUrl='mongodb://0.0.0.0:27017';

if(process.env.MONGODB_URL){
  mongodbUrl=process.env.MONGODB_URL;
}
// function createSessionStore() {
//   const MongoDBStore = mongoDbStore(expressSession);

//   const store = new MongoDBStore({
//     uri: 'mongodb://0.0.0.0:27017',
//     databaseName: 'online-shop',
//     collection: 'sessions'
//   });

//   return store;
// }
function createSessionStore() {
  const MongoDBStore = mongoDbStore(expressSession);

  const store = new MongoDBStore({
    uri: 'mongodb+srv://default:testers@cluster0.meakhp4.mongodb.net/?retryWrites=true&w=majority',
    databaseName: 'online-shop',
    collection: 'sessions'
  });

  return store;
}

function createSessionConfig() {
  return {
    secret: 'super-secret',
    resave: false,
    saveUninitialized: false,
    store: createSessionStore(),
    cookie: {
      maxAge: 2 * 24 * 60 * 60 * 1000
    }
  };
}

module.exports = createSessionConfig;