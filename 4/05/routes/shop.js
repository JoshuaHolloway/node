const express = require('express');

const router = express.Router();
//===========================
router.get('/', (req, res) => {
  console.log('inside root!');
  console.log('JOSH: /');
  res.send('<h1>JOSH: /</h1><a href="/add-product">link</a>');
});
//===========================
module.exports = router;
//===========================
