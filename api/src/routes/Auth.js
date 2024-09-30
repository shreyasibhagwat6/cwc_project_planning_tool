const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const authController = require('../controllers/AuthController');

router.post('/', 
body('username')
    .notEmpty()
    .withMessage('username can not be empty')
    .isString()
    .withMessage("Username must be a string")
    .isLength({ min: 5, max: 32 })
    .withMessage('Username must be at least 5 characters'),
body("name")
    .notEmpty()
    .withMessage("name can't be empty")
    .isString()
    .withMessage("name must be a string"),
body("email")
    .isEmail()
    .isString()
    .withMessage("email must be a string"),
body("password")
    .notEmpty()
    .withMessage("password can't be empty")
    .isString()
    .withMessage("password must be a string"),
    authController.authUsers);

router.get('/', authController.getUsers)

module.exports = router