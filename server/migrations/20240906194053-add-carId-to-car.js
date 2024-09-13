'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

  },

  async down (queryInterface, Sequelize) {
    // Removing the columns in case of rollback
    // await queryInterface.removeColumn('cars', 'scale');
    // await queryInterface.removeColumn('cars', 'posx');
    // await queryInterface.removeColumn('cars', 'posy');
    // await queryInterface.removeColumn('cars', 'posz');
  }
};
