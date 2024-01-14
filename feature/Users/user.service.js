const Users = require('./user.model');
const bcrypt = require('bcrypt');

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

const loginService = (body, response) => {
    return Users.findOne({_id:body.id})
    .then(data => {
        bcrypt.compare(body.password ,data.password, (err, res) => {
            if(res){
                response.json({email:data.email, username:data.name});
            }else {
                response.status(401).json("Wrong Password!");
            }   
        })
    });
}

const updateService = (id, data) => {
    return Users.findOneAndUpdate({_id:id}, data)
}

const deleteService = (id) => {
    return Users.deleteOne({_id:id});
}

module.exports = {getAllService, createUserService, getService, updateService, deleteService, loginService}

