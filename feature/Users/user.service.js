const Users = require('./user.model');

const getAllService = () => {
    return Users.find();
}

exports.getAllService = getAllService;

