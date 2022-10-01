const { loadUsers, storeUsers } = require('../data/dbModule');
const { validationResult } = require('express-validator');
const bcryptjs = require('bcryptjs');

module.exports = {
    register : (req, res) => {
        return res.render('register')
    },

    processRegister : (req, res) => { // procesa info del form REGISTER
        let errors = validationResult(req)
        if (errors.isEmpty()) {

            const { firstName, email, password } = req.body;
            const users = loadUsers();

            const newUser = {
                id : loadUsers().length !== 0 ? loadUsers()[loadUsers().length -1] + 1 : 1,
                ...req.body,
                password : bcryptjs.hashSync(password.trim(), 10),
                password2 : null,
                avatar : null
            };
            const usersModify = [...loadUsers(), newUser];
            storeUsers(usersModify);
            return res.redirect('login');
        } else {
            return res.render('register', {
                errors : errors.mapped(),
                old : req.body
            });
        }
    },

    login : (req, res) => {
        return res.render('login')
    },

    processLogin : (req, res) => { // procesa info del form LOGIN
        const errors = validationResult(req)
        if (errors.isEmpty()) {

            const { id, firstName, avatar } = loadUsers().find(user => user.email === req.body.email);
            req.session.userLogin = {
                id,
                firstName,
                avatar
            };
            
            req.body.remember && res.cookie('MLUser', req.session.userLogin, {
                maxAge : 10000 * 60
            });

            return res.redirect('/')
        } else {
            return res.render('login', {
                errors : errors.mapped(),
                old : req.body
            });
        }
    },

    profile : (req, res) => {
        const user = loadUsers().find(user => user.id === +req.session.userLogin.id);
            return res.render('profile', {
                user
            });
    },

    update : (req, res) => {
        return res.send(req.body)
    },

    logout : (req, res) => {
        req.session.destroy();
        res.cookie('MLUser', null, {
            maxAge : -1
        });
        return res.redirect('/');
    },

    remove : (req, res) => {
        const users = loadUsers();
        const usersModify = users.filter(user => user.id !== +req.params.id);
        storeUsers(usersModify);
        req.session.destroy();
        res.cookie('MLUser', null, {
            maxAge : -1
        });
        return res.redirect('/');
    }

}