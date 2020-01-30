const path = require('path');
const express = require('express');

const router = express.Router();
//===========================
router.get('/', (req, res) => {
  // console.log('JOSH: /');
  // res.send('<h1>JOSH: /</h1>');
  // res.sendFile('views/shop.html');
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));
});
//===========================
module.exports = router;
//===========================
