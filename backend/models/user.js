const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    username: { type:String, required: true, min: 4 },
    address: String,
    password: { type:String, required: true, min: 4 }
});

module.exports = mongoose.model('users', User);