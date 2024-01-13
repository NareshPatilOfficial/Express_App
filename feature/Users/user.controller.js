const services = require('./user.service');

const getAllController = async (request, response, next) => {
    try{
        response.json(await services.getAllService());
    }catch(error){
        console.log(error.message);
    }
}

exports.getAllController=getAllController;