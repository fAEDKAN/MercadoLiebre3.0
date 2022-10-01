// ************ Require's ************
const express = require('express');
const router = express.Router();
const registerValidator = require ('../validations/registerValidator');
const loginValidator = require('../validations/loginValidator');

// ************ Controller Require ************
const { register, processRegister, login, processLogin, profile, update, logout, remove } = require('../controllers/usersController');

//* /users

router
    .get('/register', register)
    .post('/register', registerValidator, processRegister)
    .get('/login', login)
    .post('/login', loginValidator, processLogin)
    .get('/profile', profile)
    .put('/update/:id', update)
    .get('/logout', logout)
    .delete('/remove/:id', remove)

module.exports = router;
