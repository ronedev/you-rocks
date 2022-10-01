const mongoose = require('mongoose')
const Product = mongoose.model('Product')
const multer = require('multer')
const shortid = require('shortid')

const multerConfig = {
    limits: { fileSize: 1000000000},
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, callback)=>{
            switch(req.body.gender){
                case 'female':
                    callback(null,  __dirname + '../../../client/public/images/products/female/')
                    break
                case 'male':
                    callback(null, __dirname + '../../../client/public/images/products/male/')
                    break
                case 'unisex':
                    callback(null, __dirname + '../../../client/public/images/products/unisex/')
                    break
                default:
                    callback(null, __dirname + '../../../client/public/images/products/unisex/')
            }
        },
        filename: (req, file, callback)=>{
            const extension = file.mimetype.split('/')[1]
            const filename = `${shortid.generate()}.${extension}`
            req.filename = filename
            callback(null, filename)
        }
    })
}

const upload = multer(multerConfig).array('newImage')

exports.uploadImg = (req, res, next)=>{
    upload(req, res, function(error){
        if(error){
            if(error instanceof multer.MulterError){
                if(error.code === 'LIMIT_FILE_SIZE'){
                    throw new error('El archivo seleccionado es demasiado grande. Maximo 100kb')
                }
            }
        }else{
            return next()
        }
    })
}

exports.addNewProduct = async (req, res, next)=>{
    console.log(req.body)
    return next()
}

exports.updateProduct = async (req, res, next)=>{
    const {id} = req.params
    try {
        const imageURL = req.filename ? `/images/products/${req.body.gender}/${req.filename}` : null
        let {title, price, description, category, createdAt, enterprise, gender, images, offer, quantity, sizes} = req.body
        let productUpdate = {
            title,
            price,
            description,
            category,
            createdAt,
            enterprise,
            gender,
            images: req.filename ? (images + `,${imageURL}`).split(',') : images.split(','),
            offer,
            quantity,
            sizes: sizes.split(',')
        }
        const product = await Product.findByIdAndUpdate(id, productUpdate)
        if(product){
            res.status(200).json({message: 'Se ha actualizado correctamente su producto'})
        }else{
            return res.status(330).json({message: 'Ocurrio un problema al actualizar su producto'})
        }
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
    return next()
}

exports.getOneProduct = async (req, res)=>{
    const {id} = req.params

    try {
        const product = await Product.findById(id)
        if(product) return res.status(200).json(product)
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
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

exports.searchProduct = async (req, res)=>{
    const {q} = req.query
    try {
        const products = await Product.find({
            $text: {
                $search: q
            }
        }).lean()
        const count = await Product.countDocuments({
            $text:{
                $search: q
            }
        })
        if(products) return res.status(200).json({products, count})
    } catch (error) {
        console.log(error)
        return res.status(error.code).send(error.message)
    }
}