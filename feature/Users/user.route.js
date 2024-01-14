const express = require('express');
const router = express.Router();
const controller = require('./user.controller');

router.get('/', controller.getAllController);

router.get('/:id', controller.getController);

router.post('/', controller.createUserController);

module.exports = router;