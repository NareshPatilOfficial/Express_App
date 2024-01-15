const Users = require('./user.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const getAllService = () => {
    return Users.find();
}

const getService = (id) => {
    return Users.findOne({_id:id});
}

const createUserService = async (data, response) => {
    const userAvailable = await Users.findOne({email:data.email});

    const {name, password, email} = data;

    if(!name || !password || !email){
        response.status(404).json("All field are mandatory.");
    }
    if(userAvailable){
        response.status(404).json('User already registered!');
    }

    const createUser = await new Users({
        name:data.name,
        password:await bcrypt.hash(data.password, 10),
        email:data.email
    })
    .save()
    .then(res => ({name:res.name, email:res.email}));
    response.json(createUser);
}

const loginService = async (body, response) => {
    const { email, password } = body;

    if(!email || !password){
        response.status(401).json('EMail and password is mandatory for login.');
    }

    const userData = await Users.findOne({email});

    if(userData){
        bcrypt.compare(password ,userData.password, (err, res) => {
            if(res){
                const accessToken = jwt.sign({
                    user:{
                        username:userData.name,
                        email:userData.email,
                        id:userData._id
                    }
                },
                process.env.ACCESSTOKEN_SECRET_KRY,
                {expiresIn:'1m'}
                ); 

                response.json({email:userData.email, username:userData.name, accessToken});
            }else {
                response.status(401).json("Wrong Password!");
            }   
        })
    } else {
        response.status(401).json("Email OR password is wrong.");
    }
}

const updateService = (id, data) => {
    return Users.findOneAndUpdate({_id:id}, data)
}

const deleteService = (id) => {
    return Users.deleteOne({_id:id});
}

module.exports = {getAllService, createUserService, getService, updateService, deleteService, loginService}

