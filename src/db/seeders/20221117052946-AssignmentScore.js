'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')
faker.seed(123);

const assignmentScores = [...Array(100)].map((assignmentScore) => (
  {
    id: faker.datatype.uuid(),
    teacherId: faker.datatype.uuid(),
    assignmentId: faker.datatype.uuid(),
    studentId: faker.datatype.uuid(),
    score: faker.datatype.number(100),
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
     await queryInterface.bulkInsert('AssignmentScores', assignmentScores, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('AssignmentScores', null, {});
  }
};
