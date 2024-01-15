const express = require('express');
const router = express.Router();
const controller = require('./auth.controller');
const validateToken = require('../../middleware/validateToken');

router.use(validateToken);
router.post('/', controller.userInfoController);

module.exports = router;