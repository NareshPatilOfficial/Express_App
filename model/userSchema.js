const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    password:String
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
