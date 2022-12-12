'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')

faker.seed(123);
const classStudents = [...Array(100)].map((classStudent) => (
  {
    id: faker.datatype.uuid(),
    studentId: faker.datatype.uuid(),
    classId: faker.datatype.uuid(),
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
    return await queryInterface.bulkInsert('ClassStudents', classStudents, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('ClassStudents', null, {});
  }
};
