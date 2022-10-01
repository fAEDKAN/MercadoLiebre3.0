'use strict';
const roles = ['Admin', 'User'] //cada string es el nombre de una categoría que voy a crear

const rols = roles.map(rol => { //lee la info de 'roles', recorremos con map() para crear nuevo array
  return {
    name: rol,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Rols', rols, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Rols', null, {});
  }
};
