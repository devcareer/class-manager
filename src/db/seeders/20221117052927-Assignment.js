'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')
faker.seed(123);

const assignments = [...Array(100)].map((assignment) => (
  {
    id: faker.datatype.uuid(),
    teacherId: faker.datatype.uuid(),
    classId: faker.datatype.uuid(),
    studentId: faker.datatype.uuid(),
    assignment: faker.system.filePath('pdf'),
    createdAt: new Date(),
    updatedAt: new Date()
  }
))
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert('Assignments', assignments, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Assignments', null, {});
  }
};
