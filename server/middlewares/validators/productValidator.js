const { body, validationResult } = require("express-validator");

exports.validateProduct = [
    body("title")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("El titulo es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El titulo debe tener al menos 3 caracteres ")
    .bail(),
    body("price")
    .not()
    .isEmpty()
    .withMessage('Debe especificar el precio'),
    body('quantity')
    .not()
    .isEmpty()
    .withMessage('Debe especificar la cantidad'),
    body('description')
    .not()
    .isEmpty()
    .withMessage('Debe realizar al menos una descripción pequeña')
    .isLength({ max: 100 })
    .withMessage('La descripción debe ser mas corta (100 caracteres máximo)'),
    body('category')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar una categoria para el producto'),
    body('enterprise')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar una marca'),
    body('sizes')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar al menos un talle disponible'),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()){
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    }
]