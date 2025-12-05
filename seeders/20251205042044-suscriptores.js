'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
        const suscriptores = [
      {
        nombre: "Carlos Mendoza",
        email: "carlos@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nombre: "Ana Torres",
        email: "ana@example.com",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('suscriptores', suscriptores, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('suscriptores', null, {});
  }
};
