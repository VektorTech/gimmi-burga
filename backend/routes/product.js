const router = require('express').Router();

const productModel = require('../models/product');

router.get('/', async (req, res) => {
    console.log("Here")
    productModel.find({}, (err, products) => {
        res.json(products);
    });
});

module.exports = router;