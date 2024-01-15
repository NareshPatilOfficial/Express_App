const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken =asyncHandler((req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if(!authHeader.includes('Bearer')){
        res.status(401).json('Token should be Bearer.');
    }
    const token = authHeader.split(' ')[1];
    
    jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KRY, (err, decode) => {
        if(err){
            res.status(401).json('User is not authorized!');
            throw new Error('User is not authorized!');
        }
        req.user = decode.user;
        next();
    }) 
})

module.exports = validateToken;