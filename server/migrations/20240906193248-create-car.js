'use strict';

const { sequelize } = require('../models');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Cars', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      model_name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      brand: {
        type: Sequelize.STRING,
        allowNull: false
      },
      year: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      engine_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      horsepower: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      image_url: {
        type: Sequelize.TEXT,
        allowNull: false
      },
      model_3d_url: {
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
      },
      scale: {
        type: Sequelize.INTEGER,
       
      },
      posx: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      posy: {
        type: Sequelize.INTEGER, 
        allowNull: false
      },
      posz: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      time: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      range:{
        type: Sequelize.INTEGER,
        allowNull: false
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Cars');
  }
};