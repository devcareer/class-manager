'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Messages', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUID4 
      },
      message: {
        type: Sequelize.STRING
      },
      senderId:{
        type:Sequelize.UUID,
        allowNull:false,
        foreignKey:true
      },
      receiverId:{
        type:Sequelize.UUID,
        allowNull:false,
        foreignKey:true
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
    await queryInterface.dropTable('Messages');
  }
};