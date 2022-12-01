'use strict';

/** @type {import('sequelize-cli').Migration} */
const faker = require('faker')

faker.seed(123);
const messages = [...Array(100)].map((message) => (
  {
    id: faker.datatype.uuid(),
    message: faker.lorem.sentence(),
    senderId: faker.datatype.uuid(),
    receiverId: faker.datatype.uuid(),
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
   return await queryInterface.bulkInsert('Messages', messages, {});
   
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return await queryInterface.bulkDelete('Messages', null, {});
  }
};
