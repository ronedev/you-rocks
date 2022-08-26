const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.addNewProduct = async (req, res, next)=>{
    console.log(req.body)
    return next()
}

exports.getAllProducts = async (req, res)=>{
    try {
        const products = await Product.find().lean()
        if(products) return res.status(200).json(products)
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}

exports.getOfferedProducts = async (req, res)=>{
    try{
        const products = await Product.find({offer: true}).lean()
        if(products) return res.status(200).json(products)
    }catch(error){
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}

exports.getRandomProduct = async (req, res, next)=> {
    try {
        const totalDocs = await Product.countDocuments().lean()
        const random = Math.floor(Math.random() * totalDocs)
    
        const randomProduct = await Product.findOne().skip(random).lean()
    
        if(randomProduct) return res.status(200).json(randomProduct)
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}