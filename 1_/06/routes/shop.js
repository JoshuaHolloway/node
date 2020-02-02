const express = require('express');

const router = express.Router();
//===========================
router.get('/', (req, res) => {
  console.log('JOSH: /');
  res.send('<h1>JOSH: /</h1>');
});
//===========================
module.exports = router;
//===========================
