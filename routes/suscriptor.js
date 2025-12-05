const express = require("express");
const router = express.Router();
const suscriptorController = require("../controllers/suscriptor");

router.get("/crear", suscriptorController.formCrear);
router.post("/Crearsuscriptores", suscriptorController.grabar);

router.get("/buscar-id", suscriptorController.formBuscarPorId);
router.post("/buscar-id", suscriptorController.buscarPorId);

router.get("/buscar-rango", suscriptorController.formBuscarRango);
router.post("/buscar-rango", suscriptorController.buscarRango);

router.get("/todos", suscriptorController.listarTodos);

module.exports = router;
