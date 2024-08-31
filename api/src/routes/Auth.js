const express = require('express');
const router = express.Router();
const authController = require('../controllers/AuthController');

router.post('/', authController.authUsers);

router.get('/', authController.getUsers)

module.exports = router