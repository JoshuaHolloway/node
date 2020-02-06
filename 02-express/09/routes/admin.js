const path = require('path');
//===========================
const express = require('express');
const router = express.Router();
//===========================
router.get('/add-product', (req, res) => {
  console.log('JOSH: /josh');
  // res.send(
  //   '<form action="/admin/product" method="POST"><input type="text" name="josh_name"><button type="submit">Add Product:</button></form>'
  // );
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
});
//===========================
router.post('/add-product', (req, res) => {
  console.log('**************');
  console.log('**************');
  console.log('**************');
  console.log('inside /product');
  console.log('**************');
  console.log('**************');
  console.log('**************');
  console.log(req.body);
  res.redirect('/');
});
//===========================
router.get('/error', (req, res) => {
  res.sendFile();
});
//===========================
module.exports = router;
//===========================
