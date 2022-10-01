'use strict';
const metodos = ['Efectivo', 'Débito', 'Crédito', 'Mercado Pago'] //cada string es el nombre de una categoría que voy a crear

const methods = metodos.map(payrole => { //lee la info de 'metodos', recorremos con map() para crear nuevo array
  return {
    name: payrole,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Payroles', methods, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Payroles', null, {});
  }
};
