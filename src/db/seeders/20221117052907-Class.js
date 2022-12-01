'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')

faker.seed(123);
const classes = [...Array(100)].map((classs) => (
  {
    id: faker.datatype.uuid(),
    className: faker.datatype.uuid(),
    year: faker.date.between(),
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
    return await queryInterface.bulkInsert('Classes', classes, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete('Classes', null, {});
  }
};
