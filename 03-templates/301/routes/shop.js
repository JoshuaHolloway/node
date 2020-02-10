//===========================
const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); //.js
const admin_data = require('./admin'); //.js

const router = express.Router();
//===========================
router.get('/', (req, res) => {
  console.log('/ in app.ejs, products:');
  const products = admin_data.products;
  console.log(products);
  res.render('shop', {
    prods: products,
    page_title: 'Shop Page',
    path: '/',
    has_products: products.length > 0,
    active_shop: true,
    productCSS: true
  });
});
//===========================
module.exports = router;
//===========================
