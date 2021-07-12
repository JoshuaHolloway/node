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

// Add headers for CORS
app.use((req, res, next) => {

    // -setHeader adds a header to the response.
    // -We don't send a response, yet.
    // -setHeader() does NOT send the response.
    // -json() does send the response.
    // -render does send the response.
    // -setHeader() only modifies the response and adds a new header.
    res.setHeader('Access-Control-Allow-Origin', '*'); // * is a wild-card that allows access from any client
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Allow the request to continue in the middle-ware (to be handled by the routes):
    next();
});

// Forward incoming request that start with /feed
app.use('/feed', feedRoutes);
//===============================================
app.listen(8080, () => console.log('http://localhost:8080'));
//===============================================