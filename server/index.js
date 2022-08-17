const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const PORT = 3002

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.listen(PORT, err => {
    if(err) return console.log(err)
    console.log(`Server corriendo desde el servidor: ${PORT}`)
})