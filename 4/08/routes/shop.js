const path = require('path');
const express = require('express');

const router = express.Router();
//===========================
router.get('/', (req, res) => {

  console.log('__dirname: ' + __dirname);

  // console.log('JOSH: /');
  // res.send('<h1>JOSH: /</h1>');
  // res.sendFile('views/shop.html');
  res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));

  // .join returns a path with the args concatenated
  // __dirname returns the path the current file is located in the OS
});
//===========================
module.exports = router;
//===========================
