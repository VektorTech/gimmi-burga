require('dotenv').config();
const express = require('express');
const session = require('express-session')
const mongoose = require('mongoose');
const cors = require('cors');
const passport = require('passport');

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const searchRoute = require('./routes/search');

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true, useFindAndModify: false})
.then(() => console.log("Successful connection established to mongoDB server.")).catch(console.log);

const app = express();

app.use(cors({origin:"http://localhost:3000", credentials:true}));
app.use(express.urlencoded());

app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: { secure: true }
}));

require('./passport.config')(passport);
app.use(passport.initialize());
app.use(passport.session());


app.use(userRoute);
app.get('/', () => console.log('hdd'));
app.use('/products', productRoute);
app.use('/search', searchRoute);

app.listen(5000);