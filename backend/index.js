const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const signUpRoute = require('./routes/signup');
const signInRoute = require('./routes/signin');

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(express.urlencoded());

app.use(signUpRoute);
app.use(signInRoute);

app.listen(5000);