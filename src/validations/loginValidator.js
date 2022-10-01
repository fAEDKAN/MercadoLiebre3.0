const { body, check } = require('express-validator');
const { loadUsers } = require('../data/dbModule');
const bcryptjs = require('bcryptjs');

module.exports = [
    check('email')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .isEmail().withMessage('Ingrese un email válido').bail(),

    body('password')
    .notEmpty().withMessage('Éste campo es obligatorio').bail()
    .custom((value, {req}) => {
        let user = loadUsers().find(user => user.email === req.body.email && bcryptjs.compareSync(value, user.password));
        return user ? true : false
    }).withMessage('El email o la contraseña no coinciden')
]