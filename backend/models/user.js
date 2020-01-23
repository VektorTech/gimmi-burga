const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
    id: { type: Number, require: true },
    username: { type:String, required: true, min: 4 },
    address: String,
    password: { type:String, required: true, min: 4 },
    favorites: Array
});

module.exports = mongoose.model('users', User);