const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');
const User = require('./models/user')


module.exports = (passport) => {
    passport.use(
        new LocalStrategy((username, password, done) => {
            User.findOne({ username: username }, {_id:0}, async (err, user) => {
                if (err) { return done(err); }
                if (!user) {
                  return done(null, false, { message: 'Incorrect username.' });
                }
                if ( !await bcrypt.compare( password, user.password ) ) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, user);                
            })
        })
    );
    
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    
    passport.deserializeUser((id, done) => {
        User.find({"id": id}, (err, user) => {
            done(err, user);
        });
    });
    //use try catch for bcrypt
};