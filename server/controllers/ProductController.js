const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.addNewProduct = async (req, res, next)=>{
    console.log(req.body)
    return next()
}

exports.getOneProduct = async (req, res)=>{
    const {id} = req.params
    const limit = 1
    const offset = id

    const product = await Product.findOne().skip(offset).limit(limit)
    res.send('Por terminar')
}

exports.getAllProducts = async (req, res)=>{
    
    const {page} = req.query
    const limit = 6
    const offset = limit * (page - 1)

    if(page){
        try {
            const products = await Product.find().skip(offset).limit(limit).lean()
            const count = await Product.countDocuments()
            if(products) return res.status(200).json({products, count})
        } catch (error) {
            console.log(error)
            return res.status(error.code).send(error.message)
        }
    }else{
        try {
            const products = await Product.find().lean()
            if(products) return res.status(200).json(products)
        } catch (error) {
            console.log(error)
            return res.status(error.code).send(error.message)
        }
    }
}

exports.getOfferedProducts = async (req, res)=>{
    const {page} = req.query
    const limit = page ? 6 : 10
    const offset = limit * (page - 1)
    try{
        if(page){
            const products = await Product.find({offer: true}).limit(limit).skip(offset).lean()
            const count = await Product.countDocuments({offer: true})
            if(products) return res.status(200).json({products, count})
        }else{
            const products = await Product.find({offer: true}).limit(limit).lean()
            const count = await Product.countDocuments({offer:true})
            if(products) return res.status(200).json({products, count})
        }
    }catch(error){
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}

exports.getMaleProducts = async (req,res)=>{
    const {page} = req.query
    const limit = 6
    const offset = limit * (page - 1)
    try {
        if(page){
            const products = await Product.find({gender: "male"}).limit(limit).skip(offset).lean()
            const count = await Product.countDocuments({gender: "male"})
            if(products) return res.status(200).json({products, count})
        }else{
            const products = await Product.find({gender: "male"}).lean()
            const count = await Product.countDocuments({gender: "male"})
            if(products) return res.status(200).json({products, count})
        }
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}

exports.getFemaleProducts = async (req,res)=>{
    const {page} = req.query
    const limit = 6
    const offset = limit * (page - 1)
    try {
        if(page){
            const products = await Product.find({gender: "female"}).limit(limit).skip(offset).lean()
            const count = await Product.countDocuments({gender: "female"})
            if(products) return res.status(200).json({products, count})
        }else{
            const products = await Product.find({gender: "female"}).lean()
            const count = await Product.countDocuments({gender: "female"})
            if(products) return res.status(200).json({products, count})
        }
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}

exports.getUnisexProducts = async (req,res)=>{
    const {page} = req.query
    const limit = 6
    const offset = limit * (page - 1)
    try {
        if(page){
            const products = await Product.find({gender: "unisex"}).limit(limit).skip(offset).lean()
            const count = await Product.countDocuments({gender: "unisex"})
            if(products) return res.status(200).json({products, count})
        }else{
            const products = await Product.find({gender: "unisex"}).lean()
            const count = await Product.countDocuments({gender: "female"})
            if(products) return res.status(200).json({products, count})
        }
    } catch (error) {
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