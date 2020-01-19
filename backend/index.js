require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');
const searchRoute = require('./routes/search');

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(express.urlencoded());

app.use(userRoute);
app.use('/products', productRoute);
app.use('/search', searchRoute);

app.listen(5000);