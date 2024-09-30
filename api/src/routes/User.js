const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');

router.post('/', userController.postUsers)

module.exports = router