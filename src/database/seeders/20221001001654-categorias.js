'use strict';
const categorias = ['Audio y Video', 'Hogar', 'Informática', 'Tiempo Libre', 'Celulares', 'Herramientas'] //cada string es el nombre de una categoría que voy a crear

const categories = categorias.map(category => { //lee la info de 'categorias', recorremos con map() para crear nuevo array
  return {
    name: category,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Categories', categories, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Categories', null, {});
  }
};
