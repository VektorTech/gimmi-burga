const router = require('express').Router();
const bcrypt = require('bcryptjs');

const UserModel = require('../models/user');

router.post('/signin', async (req, res) => {
    UserModel.findOne({ username: req.body.username }, (err, user) =>{
        if (err) res.send("err"+err);
        bcrypt.compare( req.body.password, user.password ).then((result) => {
            if(result) res.send(user.username);
        })
    });
});

module.exports = router;