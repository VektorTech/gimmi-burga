const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: String ,
    category: String,
    description: String,
    price: Number,
    imgLow: String,
    imgHigh: String   
});

module.exports = mongoose.model('products', productSchema);