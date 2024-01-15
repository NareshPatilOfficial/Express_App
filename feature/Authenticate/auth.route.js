const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');

router.post('/', controller.userInfoController);

module.exports = router;