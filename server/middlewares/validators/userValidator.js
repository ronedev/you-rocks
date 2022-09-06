const {check, validationResult} = require('express-validator');

exports.validateUser = [
  check('name')
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage('El nombre es obligatorio')
    .bail()
    .isLength({min: 3})
    .withMessage('El nombre debe tener al menos 3 caracteres ')
    .bail(),
  check('email')
    .trim()
    .normalizeEmail()
    .not()
    .isEmpty()
    .withMessage('Ingrese un email válido')
    .bail(),
  check('password')
    .trim()
    .not()
    .isEmpty()
    .isLength({min: 6})
    .withMessage('La contraseña debe tener al menos 6 caracteres')
    .bail(),
  check('repeat-password')
    .trim()
    .not()
    .isLength({min: 6})
    .equals('password')
    .withMessage('Las contraseñas deben coincidir')
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    console.log(req.body)
    console.log(errors)
    if (!errors.isEmpty())
      return res.status(422).json({errors: errors.array()});
    next();
  },
];