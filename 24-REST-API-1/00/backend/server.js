//===============================================
const express = require('express');
const app = express();
//===============================================
// Register route:
const feedRoutes = require('./routes/feed.js');

// Forward incoming request that start with /feed
app.use('/feed', feedRoutes);
//===============================================
app.listen(8080, () => console.log('http://localhost:8080'));
//===============================================