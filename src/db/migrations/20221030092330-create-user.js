'use strict';

const { toDefaultValue } = require('sequelize/types/utils');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        allowNull: false, type:Sequelize.STRING
      },
      secondName: Sequelize.STRING,
      email: {
        type:Sequelize.STRING,
        unique:true,
        allowNull:false
      },
      password: {
        type:Sequelize.STRING,
        allowNull:false
      },
      verify: {
        type:Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: false
      },
      roleId: {
        type: Sequelize.UUID,
        allowNull:false
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
    await queryInterface.dropTable('Users');
  }
};