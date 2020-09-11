const express = require('express')
const cors = require('cors')
const fs = require('fs')
const app = express()
const port = 9999

app.use(cors())

const rooms = JSON.parse(fs.readFileSync('./rooms.json'))

const users = JSON.parse(fs.readFileSync('./users.json'))

app.get('/', (req, res) => {
  res.send('/lanzamiento /usuarios /salas')
})

app.get('/lanzamiento', (req, res) => {
  res.send('{fecha_lanzamiento: 2020-10-01, habilitado: true, eliminado: false}')
})

app.get('/usuarios', (req, res) => {
  res.send(users);
})

app.get('/salas', (req, res) => {
  res.send(rooms);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
