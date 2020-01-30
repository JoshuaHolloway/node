//===========================
const path = require('path');
const express = require('express');

const rootDir = require('../util/path'); //.js

// NEW: Added [78]
const admin_data = require('./admin'); //.js

const router = express.Router();
//===========================
router.get('/', (req, res) => {
  console.log(admin_data.products);

  // <!-- NEW: Added [90] -->
  const products = admin_data.products;

  // <!-- NEW: Changed [90] -->
  //res.sendFile(path.join(rootDir, 'views', 'shop.html'));
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
