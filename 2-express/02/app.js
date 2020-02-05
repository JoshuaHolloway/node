//const http = require('http');

// const routes = require('./routes');
const express = require('express');
const app = express();

// This will always run:
app.use('/', (req, res, next) => {

  console.log('THIS will always run');
  next();
});

app.use('/josh', (req, res, next) => {
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function (recursion?)
  console.log('JOSH: /josh');
  res.send('<h1>JOSH: /josh</h1>');
});

// Any route beginning with / that is not exactly /josh will go here:
app.use('/', (req, res, next) => {
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function (recursion?)
  console.log('JOSH: /');
  res.send('<h1>Default root route: /</h1>');
});

// const server = http.createServer(routes.handler);
// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000);
