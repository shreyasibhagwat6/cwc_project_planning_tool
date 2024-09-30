const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const { validationResult } = require('express-validator');
const { postUsers } = require('./UserController');

const authUsers = async (req, res) => {
    const newUser = { name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password }
    const result = validationResult(req);
    console.log("hello", result);
    console.log(result.isEmpty())
    if (!result.isEmpty()) {
        return res.status(400).send({ errors: result.array() });
    } else {
        const createUser = await prisma.cwcname.create({ data: newUser })
        res.send(createUser)
        }
        // res.send("fake token");
}


const getUsers = async (req, res) => {
    const allNames = await prisma.cwcname.findMany()
    res.send(allNames)
}

module.exports = { 
    authUsers,
    getUsers
}