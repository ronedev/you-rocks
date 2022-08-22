const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const productSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    price:{
        type: String,
        default: 0,
        required: true,
        trim: true
    },
    category:{
        type: String,
        required: true
    },
    enterprise:{
        type: String,
        required: true
    },
    offer:{
        type: Boolean
    },
    images: [String],
    gender: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        trim: true
    },
    sizes: [String]
})

module.exports = mongoose.model('Product', productSchema)