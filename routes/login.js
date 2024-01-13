let createError = require('http-errors');
let express = require('express');
let Users = require('../model/userSchema');
let router = express.Router();

const userData = [
    {
        name:'Naresh',
        password:'admin@123'
    }
]

const authenticate = async (request, response, next) => {
    
    // request.setHeader('Content-Type', 'application/json');
    // const {name, password} = request.body;
    // let user = userData.find(uDT => uDT.name === name && uDT.password===password);
    // if(user){
    //     response.send('User Found');
    // }else {
    //     next(createError(401));
    // }
    try{
        const users = await Users.find();
        response.json(users);
    }catch(error){
        response.status(500).json({message:error.message});
    }
}

router.post('/', authenticate)

module.exports = router;