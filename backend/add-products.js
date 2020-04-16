require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true});

const products = mongoose.model('products', {
    name: String ,
    category: String,
    description: String,
    price: String,
    imgLow:String,
    imgHigh: String   
});

const prods = require('./products.json');
prods.forEach(elem => { 
    const prod = new products(elem);
    prod.save();
});