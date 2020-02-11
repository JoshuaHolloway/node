// [400]: Not using this anymore
// -Can delete the entire /util directory
const rootDir = require('../util/path'); //.js
//===========================
const path = require('path');
const express = require('express');
const router = express.Router();
//===========================
const products = [];
//===========================
// [400]: Moved anonymous function into product.js 
const productsController = require('../controllers/products'); //.js
router.get('/add-product', productsController.getAddProduct);
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
