const { check, body } = require('express-validator');
const { loadUsers } = require('../data/dbModule');

module.exports = [
    check('firstName')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isLength({
        min : 5,
        max : 15
    }).withMessage('Debe contener entre 5 y 15 caracteres').bail()
    .isAlpha('es-ES').withMessage('Sólo se admiten caracteres alfabéticos'),

    check('lastName')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isLength({
        min : 5,
        max : 15
    }).withMessage('Debe contener entre 5 y 15 caracteres').bail()
    .isAlpha('es-ES').withMessage('Sólo se admiten caracteres alfabéticos'),

    check('email')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isEmail().withMessage('Ingrese un email válido').bail()
    .custom((value, {req}) => {
        const user = loadUsers().find(user => user.email === value);
        if(user){
            return false
        }else {
            return true
        }
    }).withMessage('El email ya se encuentra registrado'),
    
    check('password')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isLength({
        min: 8,
        max: 25
    }).withMessage('Debe contener entre 8 y 25 caracteres'),

    body('password2')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .custom((value, { req }) => {
        if (value !== req.body.password) {
            return false
        }
        return true
    }).withMessage('Las contraseñas no coinciden')
]