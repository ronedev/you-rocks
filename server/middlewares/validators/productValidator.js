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
    .not()
    .isEmpty()
    .withMessage('Debe especificar el precio')
    .isNumeric()
    .withMessage('Ingrese un valor numérico'),
    check('quantity')
    .not()
    .isEmpty()
    .withMessage('Debe especificar la cantidad')
    .isNumeric()
    .withMessage('Ingrese un valor numérico'),
    check('description')
    .not()
    .isEmpty()
    .withMessage('Debe realizar al menos una descripción pequeña')
    .isLength({ max: 100 })
    .withMessage('La descripción debe ser mas corta (100 caracteres máximo)'),
    check('category')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar una categoria para el producto'),
    check('enterprise')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar una marca'),
    check('sizes')
    .not()
    .isEmpty()
    .withMessage('Debe seleccionar al menos un talle disponible'),
    check('images')
    .isArray()
    .notEmpty()
    .withMessage('Debe seleccionar al menos 2 imagenes')
    .isLength({max:4})
    .withMessage('Maximo 4 imagenes por producto'),
    (req, res, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty())
        return res.status(422).json({ errors: errors.array() });
        next();
    }
]