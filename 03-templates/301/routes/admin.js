const rootDir = require('../util/path'); //.js
//===========================
const path = require('path');
const express = require('express');
const router = express.Router();
//===========================
const products = [];
//===========================
router.get('/add-product', (req, res) => {
  console.log('JOSH: /josh');
  res.sendFile(path.join(rootDir, 'views', 'add-product.ejs'));

  // [301]
  // res.render('add-product', { page_title: 'Add Products Page' });
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
});
//===========================
router.post('/add-product', (req, res) => {
  console.log('/add-product');
  console.log(req.body);
  products.push({ title: req.body.form_input_name });
  res.redirect('/');
});
//===========================
router.get('/error', (req, res) => {
  res.sendFile();
});
//===========================
exports.routes = router;
exports.products = products;
//===========================
