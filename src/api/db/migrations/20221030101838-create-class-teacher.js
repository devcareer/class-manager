'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ClassTeachers', {
      id: {
        allowNull: false,
        defaultValue:Sequelize.UUIDV4,
        primaryKey: true,
        type: Sequelize.UUID
      },
      classId: {
        type: Sequelize.UUID,
        allowNull:false,
        foreignKey:true
      },
      teacherId:{
        type: Sequelize.UUID,
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
    await queryInterface.dropTable('ClassTeachers');
  }
};