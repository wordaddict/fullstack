require('dotenv').config();

const mongoose = require('mongoose');

if (process.env.Node_ENV === 'production') {
  // Production mode
    module.exports = require('./dev');
  } else {
  // Dev mode
    module.exports = require('./prod');
  };

//Set up mongoose connection
const mongoDB = `mongodb://${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE_NAME_DEV}`;
console.log(mongoDB);
mongoose.connect(mongoDB);

// Get mongoose to use global promise library
mongoose.Promise = global.Promise;

// Get the connection
const db = mongoose.connection;

// Bind connection to error event to get notification
db.on('error', console.error.bind(console, 'MongoDB connection error'))

var config = {

    init_port: process.env.PORT,
    appName: process.env.APP_NAME,

    mongodb: {
        connection: {
          host: process.env.MONGODB_HOST,
          username: process.env.MONGODB_USER,
          password: process.env.MONGODB_PASSWORD,
          port: process.env.MONGODB_PORT,
          db: process.env.MONGODB_DATABASE_NAME
  
        }
      },
};