// 66. Using Express Router
const express = require('express');
const body_parser = require('body-parser');
//===========================
const app = express();
//===========================
// register parser
app.use(body_parser.urlencoded({ extended: false }));
//===========================
const admin_routes = require('./routes/admin'); //.js
app.use(admin_routes);
//===========================
const shop_routes = require('./routes/shop');   //.js
app.use(shop_routes);
//===========================
const port_num = 3e3;
app.listen(port_num, () => console.log('http://localhost:3000'));
//===========================
