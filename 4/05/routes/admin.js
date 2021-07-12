//===========================
const express = require('express');

// https://expressjs.com/en/guide/routing.html#express-router

// -Use the express.Router class to create modular,
//  mountabe route handlers.
// -A Router instance is a complete middleware and
//  routing system;
//    --For that reason, it is referred to as a min-app
//
// In this file we:
//  --Create a router as a module
//  --Load a middleware function into it
//  --Define some routes
//  --Mounts the router module on a path in the main app
//
// We then load the router module in the main server file
//  const admin_routes = require('routes/admin.js);
//  app.use(a);

// Router allows us to split code across files
const router = express.Router();
//===========================
router.get('/add-product', (req, res) => {
  console.log('JOSH: /josh');
  res.send(
    '<form action="/product" method="POST"><input type="text" name="josh_name"><button type="submit">Add Product:</button></form>'
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
