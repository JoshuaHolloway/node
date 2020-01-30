// 67. Adding a 404-error page
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));
//===========================
const admin_routes = require('./routes/admin.js');
app.use(admin_routes);
//===========================
const shop_routes = require('./routes/shop.js');
app.use(shop_routes);
//===========================
// handle errors:
app.use((req, res, next) => {
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  console.log('JOSH: ERROR!!!!');
  res.status(404); // set status code
  res.send('<h1>Page not found</h1>');
  // can chain these
});
//===========================
app.listen(3000);
//===========================
