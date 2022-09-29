const express = require('express')
const productController = require('../controllers/ProductController.js')
const userController = require('../controllers/UserController.js')
const {validateUser} = require('../middlewares/validators/userValidator.js')

const router = express.Router()

//Home page
router.get('/', (req, res)=> res.send('Hola'))

//Obtener todos los productos
router.get('/product/get/', productController.getAllProducts)

//Obtener un solo producto especifico
router.get('/product/get/:id', productController.getOneProduct)

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

//Buscar producto
router.get('/product/search', productController.searchProduct)

//Agregar producto
router.post('/product/add', productController.addNewProduct)

//Actualizar producto
router.post('/product/update/:id', productController.updateProduct)

//USER CONTROLLERS
router.post('/signup', validateUser, userController.signup)

//Login
router.post('/login', userController.authenticateUser)

//Logout
router.post('/logout', userController.logout)

module.exports = router