const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

const authUsers = (req, res) => {
    const newUser = { name: req.body.name, email: req.body.email, username: req.body.username, password: req.body.password }
    res.send(newUser);
    console.log(newUser);
}

const getUsers = async (req, res) => {
    const allNames = await prisma.cwcname.findMany()
    res.send(allNames)
}

module.exports = { 
    authUsers,
    getUsers
}