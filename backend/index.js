const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

const userRoute = require('./routes/user');
const productRoute = require('./routes/product');

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true});

const app = express();

app.use(cors());
app.use(express.urlencoded());

app.use(userRoute);
app.use('/products', productRoute);

app.listen(5000);