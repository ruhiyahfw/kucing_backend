'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('breedUsers', {
      id: {
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      breed_id: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      photo: {
        type: Sequelize.STRING,
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
    await queryInterface.dropTable('breedUsers');
  }
};