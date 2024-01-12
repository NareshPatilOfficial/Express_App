let express = require('express');
let router = express.Router();
var createError = require('http-errors');

const userData = [
    {
        name:'Naresh',
        password:'admin@123'
    }
]

const authenticate =  (request, response, next) => {
    
    // request.setHeader('Content-Type', 'application/json');
    const {name, password} = request.body;
    let user = userData.find(uDT => uDT.name === name && uDT.password===password);
    if(user){
        response.send('User Found');
    }else {
        next(createError(401));
    }
}

router.post('/', authenticate)

module.exports = router;