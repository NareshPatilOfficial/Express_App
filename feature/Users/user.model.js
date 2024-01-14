const mongoose = require('mongoose');

const usersSchema = new mongoose.Schema({
    name:String,
    password:String,
    email:{
        type:String,
        unique:[true, "Email address already taken"]
    }
},
{
    timestamps:true
});

const Users = mongoose.model('Users', usersSchema);

module.exports = Users;
