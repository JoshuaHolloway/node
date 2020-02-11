
const path = require('path');
const rootDir = require('../util/path'); // .ejs

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

exports.getAddProduct = getAddProduct;