const services = require('./user.service');

const getAllController = async (request, response, next) => {
    try{
        response.json(await services.getAllService());
    }catch(error){
        console.log(error.message);
    }
}

const getController = async (request, response, next) => {
    try{
        response.json(await services.getService(request.params.id));
    }catch(error){
        console.log(error.message);
    }
}

const createUserController = async (request, response, next) => {
    try{
        response.json(await services.createUserService(request.body));
    }catch(error){
        console.log(error.message);
    }
}

module.exports = {getAllController, createUserController, getController};