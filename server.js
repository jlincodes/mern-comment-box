'use strict';

// import dependencies
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// create instances
const app = express();
const router = express.Router();

// set port to either a predetermined port number or 3001
const port = process.env.API_PORT || 3001;

// congiures the API to use bodyParser and look for JSON data in req body
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// To prevent errors from Cross Origin Resource Sharing,
// set headers to allow CORS with middleware
app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods',
                'GET, HEAD, OPTIONS, POST, PUT, DELETE');
  res.setHeader('Access-Control-Allow-Headers',
                'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');

  // remove cacheing to get most recent comments
  res.setHeader('Cache-Control', 'no-cache');
  next();
});

// set the route path and initialize the API
router.get('/', function(req, res) {
  res.json({ message: 'API Initialized!' });
});

// use router configuration when API is called
app.use('/api', router);

// starts server and listens for requests
app.listen(port, function() {
  console.log(`api running on port ${port}`);
});
