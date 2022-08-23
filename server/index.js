const express = require('express')
const bodyParser = require('body-parser')
require('./config/database.js')
const routes = require('./routes/index.js')

const app = express()

const PORT = 5000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(routes)

app.listen(PORT, err => {
    if(err) return console.log(err)
    console.log(`Server corriendo desde el servidor: ${PORT}`)
})