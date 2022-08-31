const express = require('express')
const productController = require('../controllers/ProductController.js')

const router = express.Router()

//Home page
router.get('/', (req, res)=> res.send('Hola'))

//Obtener todos los productos
router.get('/product/get/', productController.getAllProducts)

//Obtener los productos en oferta
router.get('/product/get-offered', productController.getOfferedProducts)

//Obtener los productos para masculinos
router.get('/product/get-male', productController.getMaleProducts)

//Obtener los productos para femeninos
router.get('/product/get-female', productController.getFemaleProducts)

//Obtener los productos para unisex
router.get('/product/get-unisex', productController.getUnisexProducts)

//Obtener los productos en oferta
router.get('/product/get-random', productController.getRandomProduct)

//Agregar producto
router.post('/product/add', productController.addNewProduct)

module.exports = router