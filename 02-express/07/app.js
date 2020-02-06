// 68. Filtering Paths
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));
//===========================
const admin_routes = require('./routes/admin.js');

// Filter on /admin/...
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
  res.status(404); // set status code
  res.send('<h1>Page not found</h1>');
  // can chain these
});
//===========================
const port_num = 3e3;
app.listen(port_num, () => console.log('http://localhost:3000'));
//===========================
