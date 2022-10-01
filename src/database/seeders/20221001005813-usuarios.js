'use strict';
const { hashSync } = require('bcryptjs');
const users = [
  {
    name: 'Federico',
    surname: 'Somma',
    email: 'sfdk.94@hotmail.com',
    password: hashSync('123123123', 10),
    birthday: null,
    genderId: 1,
    rolId: 1,
    createdAt: new Date()
  },
  {
    name: 'User',
    surname: 'User',
    email: 'user@gmail.com',
    password: hashSync('123123123', 10),
    birthday: null,
    genderId: 1,
    rolId: 2,
    createdAt: new Date()
  }
] //cada string es el nombre de una categoría que voy a crear



module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Users', users, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Users', null, {});
  }
};
