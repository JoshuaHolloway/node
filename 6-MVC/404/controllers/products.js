
const path = require('path');
const rootDir = require('../util/path'); // .ejs

// [402]: Moved to model
//const products = [];
const Product = require('../models/product'); //.js

const getAddProduct = (req, res) => {
    console.log('JOSH: /josh');
    res.sendFile(path.join(rootDir, 'views', 'add-product.ejs'));

    // [301]
    // res.render('add-product', { page_title: 'Add Products Page' });
    res.render('add-product', {
        pageTitle: 'Add Product',
        path: '/admin/add-product',
        formCSS: true,
        productCSS: true,
        activeAddProduct: true
    });
};

const postAddProduct = (req, res) => {
    console.log('/add-product');
    console.log(req.body);

    // [402]: Moved to model
    //products.push({ title: req.body.form_input_name });
    const product = new Product(req.body.title);
    product.save();

    res.redirect('/');
};

const getProducts = (req, res) => {
    console.log('/ in app.ejs, products:');

    // [402]
    //const products = Product.fetchAll();
    // [404]
    Product.fetchAll((products) => {
        // -create our own callback process and
        //  render in the callback we passed 
        //  to fetchAll once we know
        //  that fetching all the products
        //  is done.
        // -Receive the products here becasuse
        //  that is exactly the arguement
        //  we passed to the callback in fetchAll
        //  becasue the callback arguement
        //  will refer to this anonymous function
        //  we are passing into fetchAll.
        // -It is the same logic readFile uses in 
        //  product.js.

        // [400]: producst is now a global array local to this file
        //const products = admin_data.products;
        console.log(products);
        res.render('shop', {
            prods: products,
            page_title: 'Shop Page',
            path: '/',
            has_products: products.length > 0,
            active_shop: true,
            productCSS: true
        });

    });
};

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;
exports.josh = getProducts;

//exports.products = products;