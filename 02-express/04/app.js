const express = require('express');
const body_parser = require('body-parser');

const app = express();

// register parser
app.use(body_parser.urlencoded({ extended: false }));

// add middleware function
app.use('/', (req, res, next) => {
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function (recursion?)
  console.log('Root route!');
  next();
});

app.use('/josh', (req, res) => {
  console.log('JOSH: /josh');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="josh_name"><button type="submit">Add Product:</button></form>'
  );
});

// .post will pass through only .post requests
app.post('/product', (req, res) => {
  console.log('**************');
  console.log('**************');
  console.log('**************');
  console.log('inside /product');
  console.log('**************');
  console.log('**************');
  console.log('**************');
  console.log(req.body);
  res.redirect('/');
});

app.use('/', (req, res) => {
  console.log('JOSH: /');
  res.send('<h1>JOSH: /</h1>');
});
//---------------
app.listen(3000);
//---------------
