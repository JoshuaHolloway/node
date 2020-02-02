// 72. Using a Helper Function for Navigation
const path = require('path');
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
//===========================
// NEW: Added [90]
app.set('view engine', 'ejs');
app.set('views', 'views');
//===========================
const admin_data = require('./routes/admin'); //.js
app.use('/admin', admin_data.routes);
//===========================
const shop_routes = require('./routes/shop'); //.js
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

  // NEW: Changed [90]
  //res.sendFile(path.join(__dirname, 'views', '404.html'));
  res.render('404', { page_title: 'Page Not Found' });
});
//===========================
const port_num = 3000;
app.listen(port_num, () => console.log('http://localhost:3000'));
//===========================
