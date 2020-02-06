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
  res.sendFile(path.join(rootDir, 'views', 'shop.html'));
});
//===========================
module.exports = router;
//===========================
