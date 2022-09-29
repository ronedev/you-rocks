const { check, validationResult } = require("express-validator");

exports.validateProduct = [
    check("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("El titulo es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El titulo debe tener al menos 3 caracteres ")
    .bail(),
    check("price")
    .isEmpty()
    .withMessage('Debe especificar el precio')
    .isNumeric()
    .withMessage('Ingrese un valor numérico'),
    check('quantity')
    .isEmpty()
    .withMessage('Debe especificar la cantidad')
    .isNumeric()
    .withMessage('Ingrese un valor numérico'),
    check('description')
    .isEmpty()
    .withMessage('Debe realizar al menos una descripción pequeña')
    .isLength({ max: 100 })
    .withMessage('La descripción debe ser mas corta (100 caracteres máximo)'),
    check('category')
    .isEmpty()
    .withMessage('Debe seleccionar una categoria para el producto'),
    check('enterprise')
    .isEmpty()
    .withMessage('Debe seleccionar una marca'),
    
]