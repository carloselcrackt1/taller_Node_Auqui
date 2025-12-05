const suscriptorService = require("../services/suscriptor");

module.exports = {

    async formCrear(req, res) {
        return res.render("suscriptores/create");
    },

    async grabar(req, res) {
        try {
            const { nombre, email } = req.body;

            await suscriptorService.crearSuscriptor({ nombre, email });

            return res.redirect("/suscriptores/listar");

        } catch (error) {
            console.error("Error:", error);
            return res.status(500).send("Error al grabar suscriptor");
        }
    },

    formBuscarPorId(req, res) {
        res.render("suscriptores/buscarId");
    },

    async buscarPorId(req, res) {
        try {
            const data = await suscriptorService.buscarPorId(req.body.id);
            res.render("suscriptores/verUno", { data });
        } catch (err) {
            res.status(500).send("Error en la búsqueda");
        }
    },

    formBuscarRango(req, res) {
        res.render("suscriptores/buscarRango");
    },

    async buscarRango() {
        try {
            const { desde, hasta } = req.body;
            const data = await suscriptorService.buscarPorRangoFechas(desde, hasta);
            res.render("suscriptores/listar", { data });
        } catch (err) {
            res.status(500).send("Error en la consulta por fechas");
        }
    },

    async listarTodos(eq, res) {
        try {
            const data = await suscriptorService.buscarTodos();
            res.render("suscriptores/listar", { data });
        } catch (err) {
            res.status(500).send("Error al listar suscriptores");
        }
    }
};
