'use strict';
const productos = require('../../data/products.json')

const products = productos.map(({ name, price, discount, categoryId, description }) => { //lee la info de 'productos', recorremos con map() para crear nuevo array
  return {
    name,
    price,
    discount,
    description,
    categoryId,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Products', products, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Products', null, {});
  }
};
