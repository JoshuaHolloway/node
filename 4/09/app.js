// 69. Creating HTML Pages
// 70. Serving HTML Pages
// 71. Returning a 404 Page
const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));
//===========================
const admin_routes = require('./routes/admin.js');
app.use('/admin', admin_routes);
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
  res.status(404);
  //   res.send('<h1>Page not found</h1>');
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});
//===========================
app.listen(3000);
//===========================