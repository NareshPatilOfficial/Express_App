const Users = require('./user.model');

const getAllService = () => {
    return Users.find();
}

const getService = (id) => {
    return Users.findOne({_id:id});
}

const createUserService = (data) => {
    return new Users({
        name:data.name,
        password:data.password
    }).save();
}

module.exports = {getAllService, createUserService, getService}

