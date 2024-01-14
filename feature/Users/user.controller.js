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

const updateUserController = async (request, response, next) => {
    try{
        response.json(await services.updateService(request.params.id, request.body))
    }catch(err){
        console.log(err);

        // if dome error occure during udapte data, go flow of next things it may be anythings like show 404 error for request
        next();
    }
}

module.exports = {getAllController, createUserController, getController, updateUserController};