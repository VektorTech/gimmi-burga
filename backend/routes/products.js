const router = require('express').Router();

const productModel = require('../models/product');

router.post('/', async (req, res) => {
    productModel.find({}, (err, products) => {
        res.json(products);
    });
});

module.exports = router;