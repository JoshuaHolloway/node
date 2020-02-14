// [402] (product.js)

// [403]
const fs = require('fs');
const path = require('path');

// Fake db:
//const products = [];

module.exports = class Product {

    // Define shape of product
    constructor(t) {
        this.title = t;
    }

    // Method to store to an array of products
    save() {

        // [403]
        //products.push(this);
        const p_ = path.dirname(process.mainModule.filename);
        const p = path.join(p_, 'data', 'products.json'); // store in file products.json


        // read file
        fs.readFile(p, (err, fileContent) => {

            let products = [];
            if (!err) {
                // if no error then read from products from the file we extracted
                products = JSON.parse(fileContent);
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            });
        });
    }

    static fetchAll() {
        // [403]
        const p_ = path.dirname(process.mainModule.filename);
        const p = path.join(p_, 'data', 'products.json'); // store in file products.json
        fs.readFile(p, (err, fileContent) => {
            if (err) {
                return [];
            }
            return JSON.parse(fileContent);
        });
    }
}