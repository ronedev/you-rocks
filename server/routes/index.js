const express = require('express')
const productController = require('../controllers/ProductController.js')

const router = express.Router()

//Home page
router.get('/', (req, res)=> res.send('Hola'))

//Agregar producto
router.post('/product/add', productController.addNewProduct)

module.exports = router