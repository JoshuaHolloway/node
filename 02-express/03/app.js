// const routes = require('./routes');
const express = require('express');
const app = express();

// 3rd-Party (used to be inside express already):
const body_parser = require('body-parser');
//---------------
// register parser
app.use(body_parser.urlencoded({ extended: false }));
//---------------
// When user navigates to /josh an HTML page with a form is returned as a response
app.use('/add-product', (req, res, next) => {
  console.log('/add-product');
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function (recursion?)
  res.send(
    '<form action="/product" method="POST"><input type="text" name="form_name"><button type="submit">Add Product:</button></form>'
  );
});
//---------------
// -When the form is submitted from /josh, the data is sent as a post-request to this route.
// -We then extract the body of the request.
app.use('/product', (req, res) => {
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
//---------------
app.use('/', (req, res, next) => {
  // -this function will be handled for every incoming request
  // -next is a function that will be passed to this anonomous function (recursion?)
  console.log('Root: /');
  res.send('<h1>Root /</h1><a href="/add-product">add-product</a>');
});
//---------------
const port_num = 3e3;
app.listen(port_num, () => { console.log('http://localhost:3000') });
//---------------
