const router = require('express').Router();

const productModel = require('../models/product');

router.get('/', async (req, res) => {
    const query = new RegExp(req.query.q, 'i');

    productModel
        .find()
        .or([{ name: query }, {description: query}])
        .sort({description:-1})
        .exec((err, products) => {
            res.json(products);
        });

    // const byName = await productModel.find({name: query});
    // const byDesc = await productModel.find({description: query});

    // res.json( [...byName, ...byDesc] );
  
});

module.exports = router;