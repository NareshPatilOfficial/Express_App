const Users = require('../Users/user.model');

const userInfoService = async(req, res, next) => {
    try{
        const {email} = req.user;
        const user = await Users.findOne({email});
        if(user){
            res.json(user); 
        }else{
            res.status(401);
        }
    }catch(err){
        console.log(err);
    }
    next();
}

module.exports = {userInfoService};