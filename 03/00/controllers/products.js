// Moved from routes/admin.js - router.get()
const x = (req, res) => {
    console.log('JOSH: /josh');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render('add-product', { page_title: 'Add Products Page' });
}

exports.getAddProduct = x;