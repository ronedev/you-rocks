const express = require('express')
const productController = require('../controllers/ProductController.js')

const router = express.Router()

//Home page
router.get('/', (req, res)=> res.send('Hola'))

//Obtener todos los productos
router.get('/product/get', productController.getAllProducts)

//Obteenr los productos en oferta
router.get('/product/get-offered', productController.getOfferedProducts)

//Agregar producto
router.post('/product/add', productController.addNewProduct)

module.exports = router