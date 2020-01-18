const router = require('express').Router();
const bcrypt = require('bcryptjs');

const UserModel = require('../models/user');

router.post('/signup', async (req, res) => {
    const hashedPW = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
        username: req.body.username,
        address: req.body.address,
        password: hashedPW,
        id: Date.now().toString()
    });

    user.save().then( () => res.location('Success') ).catch(res.send);
});

router.post('/signin', async (req, res) => {
    UserModel.findOne({ username: req.body.username }, async (err, user) =>{
        if (err) res.send("err"+err);
        // bcrypt.compare( req.body.password, user.password ).then((result) => {
        //     if(result) res.send(user.username);
        // });
        if(await bcrypt.compare( req.body.password, user.password )){
            res.send(user.username);
        }
    });
});
//use try catch for bcrypt
module.exports = router;