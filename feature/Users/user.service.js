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

const updateService = (id, data) => {
    return Users.findOneAndUpdate({_id:id}, data)
}

const deleteService = (id) => {
    return Users.deleteOne({_id:id});
}

module.exports = {getAllService, createUserService, getService, updateService, deleteService}

