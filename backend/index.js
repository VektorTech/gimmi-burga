const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config()

mongoose.connect(process.env.DB_URI_STRING, {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));

const app = express();

app.use(cors());

app.listen(5000);