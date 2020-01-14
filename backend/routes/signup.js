const router = require('express').Router();
const bcrypt = require('bcryptjs');

const UserModel = require('../models/user');

router.post('/signup', async (req, res) => {
    const user = new UserModel({
        username: req.body.username,
        address: req.body.address,
        password: await bcrypt.hash(req.body.password, 10)
    });

    user.save().then(() => res.location('Success') ).catch(res.send);
});

module.exports = router;