const rootDir = require('../util/path'); //.js
//===========================
const path = require('path');
const express = require('express');
const router = express.Router();
//===========================
// NEW: Added [78]
const products = [];
//===========================
router.get('/add-product', (req, res) => {
  console.log('JOSH: /josh');
  // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
  res.sendFile(path.join(rootDir, 'views', 'add-product.ejs'));
  res.render('add-product', { page_title: 'Add Products Page' });
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

// NEW: Changed syntax
//module.exports = router;
exports.routes = router;

// NEW: Added [78]
exports.products = products;
//===========================
