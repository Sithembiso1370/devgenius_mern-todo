// Require the express framework for creating a server
const express = require('express');

// Import bodyParser to access the body element of the http request
const bodyParser = require('body-parser');
// Require the mongoose module/framework to create connections to the database and its collections
const mongoose = require('mongoose');

// import the routes module we created to handle different http requests
const routes = require('./routes/api');
// Require dontenv framework tpo gain access to to .env file and its variables
require('dotenv').config();


// Create an instance of the express module imported above
const app = express();

// Store the value of the environment variable PORT if exists otherwise use PORT:5000
const port = process.env.PORT || 5000;


// Connect to the database
mongoose
  .connect(process.env.DB, { useNewUrlParser: true })
  .then(() => console.log(`Database connected successfully`))
  .catch((err) => console.log(err));


// Since mongoose's Promise is deprecated, we override it with Node's Promise
mongoose.Promise = global.Promise;



// Handle CORS related issues that you might face when trying to access the API from different domains during development and testing
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});


// bodyParser. json returns middleware that only parses JSON. 
// This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.
//  A new body object containing the parsed data is populated on the request object after the middleware
app.use(bodyParser.json());

// Tell the app to use the routes module for the route '/api'
app.use('/api', routes);

// Handle any suffacing errors
app.use((err, req, res, next) => {
  console.log(err);
  next();
});


// Configure the app to listen on the 
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});