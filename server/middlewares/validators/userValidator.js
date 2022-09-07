const { check, validationResult } = require("express-validator");

exports.validateUser = [
  check("name")
    .trim()
    .escape()
    .not()
    .isEmpty()
    .withMessage("El nombre es obligatorio")
    .bail()
    .isLength({ min: 3 })
    .withMessage("El nombre debe tener al menos 3 caracteres ")
    .bail(),
  check("email")
    .trim()
    .isEmail()
    .withMessage("Ingrese un email válido")
    .not()
    .isEmpty()
    .withMessage("Debe ingresar un email")
    .bail(),
  check("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("Debe ingresar su contraseña")
    .isLength({ min: 6 })
    .withMessage("La contraseña debe tener al menos 6 caracteres")
    .custom((value, { req, loc, path }) => {
      if (value !== req.body.confirmPassword) {
        // trow error if passwords do not match
        throw new Error("Las contraseñas no coinciden");
      } else {
        return value;
      }
    })
    .bail(),
  (req, res, next) => {
    const errors = validationResult(req);
    
    if (!errors.isEmpty())
      return res.status(422).json({ errors: errors.array() });
    next();
  },
];
