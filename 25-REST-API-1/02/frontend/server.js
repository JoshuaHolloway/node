//===============================================
const express = require('express');
const app = express();
//===============================================
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
//===============================================
app.get('/', (req, res) => {
    // Both ways work:
    // res.sendFile(path.join(__dirname, 'public', 'index.html'));
    res.render('index.html');
});
//===============================================
app.listen(3000, () => console.log('http://localhost:3000'));
//===============================================