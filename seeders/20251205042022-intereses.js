'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
    const intereses = [
      "Tecnología",
      "Ciberseguridad",
      "Desarrollo de Software",
      "Inteligencia Artificial",
      "Ciencia de Datos",
      "Blockchain",
      "Internet de las Cosas (IoT)",
      "Marketing Digital",
      "Videojuegos",
      "Finanzas y Criptomonedas"
    ];

    const records = intereses.map(descripcion => ({
      descripcion,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    await queryInterface.bulkInsert('intereses', records, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('intereses', null, {});
  }
};
