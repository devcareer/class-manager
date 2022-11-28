'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')

faker.seed(123);
const notices = [...Array(100)].map((notice) => (
  {
    id: faker.datatype.uuid(),
    notice: faker.lorem.sentences(3),
    classId: faker.datatype.uuid(),
    teacherId: faker.datatype.uuid(),
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
     return await queryInterface.bulkInsert('Notices', notices, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('People', null, {});
  }
};
