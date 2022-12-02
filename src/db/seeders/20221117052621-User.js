'use strict';

/** @type {import('sequelize-cli').Migration} */
//import bcrypt from 'bcrypt'
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
     await queryInterface.bulkInsert('Users', [{
         id: "c7a9122e-6694-11ed-9022-0242ac120005",
         firstName: 'John',
         lastName: 'Doe',
         secondName: 'Nok',
         email: 'example@example2.com',
         roleId:'c7a9122e-6694-11ed-9022-0242ac120001',
         password: 'nok',
         createdAt: new Date(),
         updatedAt: new Date()
       },
       {
        id: "c7a9122e-6694-11ed-9022-0242ac120006",
        firstName: 'John',
        lastName: 'Doe',
        secondName: 'Nok',
        email: 'example@example3.com',
        roleId: 'c7a9122e-6694-11ed-9022-0242ac120003',
        password: 'nok',
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Users', null, {});
  }
};
