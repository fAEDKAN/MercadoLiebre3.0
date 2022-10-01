'use strict';
const generos = ['Hombre', 'Mujer', 'Otros'] //cada string es el nombre de una categoría que voy a crear

const genders = generos.map(genero => { //lee la info de 'generos', recorremos con map() para crear nuevo array
  return {
    name: genero,
    createdAt: new Date() //y agregamos la fecha de creación
  }
})

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Genders', genders, {});
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('Genders', null, {});
  }
};
