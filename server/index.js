const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
require('./config/database.js')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const routes = require('./routes/index.js')
const passport = require('./config/passport.js')

require('dotenv').config({path: '.env'})

const app = express()

const PORT = 5000

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({extended: true}))

app.use(cors())

app.use(cookieParser())

app.use(session({
    secret: process.env.SECRET,
    key: process.env.KEY,
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({mongoUrl: process.env.DATABASE})
}))

app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

app.listen(PORT, err => {
    if(err) return console.log(err)
    console.log(`Server corriendo desde el servidor: ${PORT}`)
})