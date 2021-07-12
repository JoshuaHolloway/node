
const path = require('path');
const rootDir = require('../util/path'); // .ejs

const products = [];

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
    products.push({ title: req.body.form_input_name });
    res.redirect('/');
};

const josh = (req, res) => {
    console.log('/ in app.ejs, products:');

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
};

exports.getAddProduct = getAddProduct;
exports.postAddProduct = postAddProduct;
exports.josh = josh;

//exports.products = products;