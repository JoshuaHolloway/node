//===========================
const express = require('express');

const router = express.Router();
//===========================
router.get('/add-product', (req, res) => {
  console.log('JOSH: /josh');
  res.send(
    '<form action="/admin/product" method="POST"><input type="text" name="josh_name"><button type="submit">Add Product:</button></form>'
  );
});
//===========================
router.post('/product', (req, res) => {
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
module.exports = router;
//===========================
