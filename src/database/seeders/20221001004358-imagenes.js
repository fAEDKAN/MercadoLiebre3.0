'use strict';
const productos = require('../../data/products.json')

const images = productos.map(({ image, id }) => { //lee la info de 'productos', recorremos con map() para crear nuevo array
  return {
    file: image,
    productId: id,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Images', images, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Images', null, {});
  }
};
