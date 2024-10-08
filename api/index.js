const express = require('express')
const app = express()
const port = 3025
const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()
const cors = require('cors')
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

app.use(cors())

app.get('/', async (req, res) => {
  const allNames = await prisma.cwcname.findMany()
  res.send(allNames)
})

app.post('/name', jsonParser, async (req, res) => {
  const newName = await prisma.cwcname.create({ data: req.body });
  const getAllNames = await prisma.cwcname.findMany();
  res.send(getAllNames);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})