const router = require('express').Router();

const productModel = require('../models/product');

router.get('/', (req, res) => {
    const query = new RegExp(req.query.q, 'i');

    productModel
        .find()
        .or([{ name: query }, {description: query}])
        .exec((err, products) => {
            res.json(products);
        });
  
});

module.exports = router;