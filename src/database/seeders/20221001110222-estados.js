'use strict';
const estados = ['Efectivo', 'Débito', 'Crédito', 'Mercado Pago'] //cada string es el nombre de una categoría que voy a crear

const states = estados.map(estado => { //lee la info de 'estados', recorremos con map() para crear nuevo array
  return {
    state: estado,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('States', states, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('States', null, {});
  }
};
