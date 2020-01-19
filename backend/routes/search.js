const router = require('express').Router();

const productModel = require('../models/product');

router.get('/', async (req, res) => {
    const query = new RegExp(req.query.q, 'i');

    productModel.find({ $or:[{ name: query }, {description: query}] }, (err, products) => {
        res.json(products);
    });
});

module.exports = router;