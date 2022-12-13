'use strict';

/** @type {import('sequelize-cli').Migration} */
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
     await queryInterface.bulkInsert('Roles', [{
      id: "c7a9122e-6694-11ed-9022-0242ac120001",
      slug:'sl_admin',
      role: 'Admin',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
     id: "c7a9122e-6694-11ed-9022-0242ac120002",
     slug:'sl_student',
     role: 'Student',
     createdAt: new Date(),
     updatedAt: new Date()
   },
   {
    id: "c7a9122e-6694-11ed-9022-0242ac120003",
    slug:'sl_teacher',
    role: 'Teacher',
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
     await queryInterface.bulkDelete('Roles', null, {});
  }
};
