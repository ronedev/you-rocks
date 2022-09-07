const mongoose = require('mongoose')
const User = mongoose.model('User')

exports.signup = async (req, res)=>{
    const newUser = new User(req.body)

    try {
        await newUser.save()
        res.redirect('http://localhost:3000/login')
    } catch (error) {
        console.log(error)
        res.redirect('http://localhost:3000/signup')
    }
}