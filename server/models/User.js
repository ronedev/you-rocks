const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim:true
    },
    password:{
        type: String,
        required: true,
        trim: true
    },
    token: String,
    expires: Date
})

userSchema.pre('save', async function(next){
    if(!this.isModified('password')){
        //Si el password esta hasheado
        return next()
    }
    //Si el password no esta hasheado
    const hash = bcrypt.hash(this.password, 12)
    this.password = hash
    next()
})

userSchema.methods = {
    comparePassword: function(password){
        return bcrypt.compareSync(password, this.password)
    }
}

module.exports = mongoose.model('User', userSchema)