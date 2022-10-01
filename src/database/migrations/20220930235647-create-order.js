'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      total: {
        type: Sequelize.INTEGER
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {        //crea FK haciendo referencia (clave foránea)
          model: {
            tableName: 'Users'
          },
          key: 'id'
        }
      },
      stateId: {
        type: Sequelize.INTEGER,
        references: {        //crea FK haciendo referencia (clave foránea)
          model: {
            tableName: 'States'
          },
          key: 'id'
        }
      },
      payRoleId: {
        type: Sequelize.INTEGER,
        references: {        //crea FK haciendo referencia (clave foránea)
          model: {
            tableName: 'Payroles'
          },
          key: 'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};