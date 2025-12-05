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

    const registros = [
      // Suscriptor 1
      {
        id_suscriptores: 1,
        id_intereses: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_suscriptores: 1,
        id_intereses: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      // Suscriptor 2
      {
        id_suscriptores: 2,
        id_intereses: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id_suscriptores: 2,
        id_intereses: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ];

    await queryInterface.bulkInsert('suscriptor_intereses', registros, {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('suscriptor_intereses', null, {});
  }
};
