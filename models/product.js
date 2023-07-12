
const fs = require('fs');
const path = require('path');
const rootDir = require('../util/path')
const p = path.join(rootDir, 'data', 'products.json');
module.exports = class Product {

    constructor(title) {
        this.title = title;
    }
    save() {
        readFromFile((products) => {
            products.push(this);

            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log(err);
            })
        })



    }
    static fetchAll(callback) {
        readFromFile(callback);

    }
}

const readFromFile = (callback) => {

    fs.readFile(p, (err, data) => {
        if (err) {
            callback([]);
        } else {
            callback(JSON.parse(data));
        }
    })
}