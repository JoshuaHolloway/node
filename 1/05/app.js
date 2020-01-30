// 66. Using Express Router
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
app.listen(3000);
//===========================
