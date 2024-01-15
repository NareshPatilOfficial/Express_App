const asyncHandler = require('express-async-handler');
const jwt = require('jsonwebtoken');

const validateToken =asyncHandler((req, res, next) => {
    const authHeader = req.headers.Authorization || req.headers.authorization;
    if(!authHeader || !authHeader.includes('Bearer')){
        res.status(401);
    }
    const token = authHeader.split(' ')[1];

    if(!token){
        res.status(401);
        throw new Error('Token is required!');
    }
    
    jwt.verify(token, process.env.ACCESSTOKEN_SECRET_KRY, (err, decode) => {
        if(err){
            res.status(401);
            throw new Error('User is not authorized!');
        }
        req.user = decode.user;
    })
    next();
})

module.exports = validateToken;