// 72. Using a Helper Function for Navigation
const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));

// [02-12] Static file paths will be forwarded here:
app.use(express.static(path.join(__dirname, 'public')));
//===========================
const admin_routes = require('./routes/admin'); //.js
app.use('/admin', admin_routes);
//===========================
const shop_routes = require('./routes/shop'); //.js
app.use(shop_routes);
//===========================
// handle errors:
app.use((req, res, next) => {
  console.log('JOSH: Wrong Route!!!!');
  res.status(404);
  //   res.send('<h1>Page not found</h1>');
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});
//===========================
const port_num = 3e3;
app.listen(port_num, () => console.log('http://localhost:3000'));
//===========================
