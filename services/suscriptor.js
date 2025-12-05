const { suscriptores } = require('../models');
const { Op } = require("sequelize");

module.exports = {
    async crearSuscriptor(datos) {
        return await suscriptores.create(datos);
    },
    async buscarPorId(id) {
        return await suscriptores.findByPk(id);
    },

    async buscarPorRangoFechas(desde, hasta) {
        return await suscriptores.findAll({
            where: {
                createdAt: {
                    [Op.between]: [desde, hasta]
                }
            }
        });
    },

    async buscarTodos() {
        return await suscriptores.findAll({
            include: intereses
        });
    }
};