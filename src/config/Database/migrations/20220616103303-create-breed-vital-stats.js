'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('breedVitalStats', {
      name: {
        type: Sequelize.STRING,
        primaryKey: true,
        allowNull: false
      },
      lifeSpan: {
        type: Sequelize.STRING,
        allowNull: false
      },
      length: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: false
      },
      origin: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('breedVitalStats');
  }
};