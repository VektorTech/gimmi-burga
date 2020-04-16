const router = require('express').Router();

const productModel = require('../models/product');

router.get('/', (req, res) => {
    productModel.find({ }).exec((err, products) => {
        res.json(products);
    });
});

module.exports = router;