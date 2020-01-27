const router = require('express').Router();
const bcrypt = require('bcryptjs');
const passport = require('passport');

const UserModel = require('../models/user');

router.post('/signup', async (req, res) => {
    const hashed_password = await bcrypt.hash(req.body.password, 10);
    const user = new UserModel({
        username: req.body.username,
        address: req.body.address,
        password: hashed_password,
        id: Date.now().toString()
    });

    user.save().then( () => res.location('Success') ).catch(res.send);
});

router.post(
    '/signin', 
    (req, res, next) => {
        passport.authenticate('local', (err, user, info) => { 
        // successRedirect: '/',
        // failureRedirect: '/login',
        // failureFlash: true 

        req.logIn(user, err => {
            if (err) { return next(err); }
            console.log("auth");
            res.json(user);
        });

    })(req, res, next);
});

const checkAuth = (req, res, next) => {
    if(req.isAuthenticated()){
        next();
    } else console.log("Need Permission");
}

router.post('/favorite', checkAuth, (req, res, next) => {
    UserModel.findByIdAndUpdate(
        req.user[0]._id, 
        { favorites: [req.body.id] },
        (err, user) => {
            if (err) return next(err);
            console.log(user);
        });
});

router.get('/favorite', checkAuth, (req, res, next) => {
    UserModel.findById(req.user[0]._id, (err, user) => {
        res.json(user.favorites);
    });
});

router.post(
    '/signout',
    (req, res, next) => {
        req.logOut();
        res.json({out: "OUT"});
});

module.exports = router;