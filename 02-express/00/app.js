const http = require('http');

// const routes = require('./routes');
const express = require('express');
const app = express();

// add middleware function
app.use((req, res, next) => {
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function
  console.log('JOSH: Middleware');
  next(); // allows request to continue to the next middleware in line
});

app.use((req, res, next) => {
  console.log('JOSH-2: Middleware');
  // ...
});

// const server = http.createServer(routes.handler);
const server = http.createServer(app);

server.listen(3000);
