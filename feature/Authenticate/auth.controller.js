const {userInfoService} = require('./auth.service');

const userInfoController = async (req, res, next) => {
    await userInfoService(req, res, next);
}

module.exports = {userInfoController};