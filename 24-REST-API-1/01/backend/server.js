//===============================================
const express = require('express');
const bodyParser = require('body-parser');
//===============================================
// Register route:
const feedRoutes = require('./routes/feed.js');

const app = express();

// -x-www-form-url-encoded is default form of data submited
//  through a form post request.
//app.use(bodyParser.urlencoded()); 
app.use(bodyParser.json());

// Forward incoming request that start with /feed
app.use('/feed', feedRoutes);
//===============================================
app.listen(8080, () => console.log('http://localhost:8080'));
//===============================================