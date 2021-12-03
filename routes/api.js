const {
    Router
} = require("express");
const lugar = require("../controller/controladorLugares");
const comentario = require("../controller/controladorComentarios");
const formulario = require("../controller/controladorFormulario");


const router = Router();

//API LUGARES
router.get("/lugares", lugar.obtenerLugares);
router.get("/lugares/:id", lugar.obtenerInformacion);

//API COMENTARIOS
router.get("/comentario/:id", comentario.obtenerComentarios);
router.post("/comentario", comentario.ingresarComentario);

// API FORMULARIO
router.post("/form", formulario.ingresarFormulario);
router.get("/formulario/:email", formulario.buscarFormulario);
router.delete("/formulario/:id", formulario.borrarFormulario);
module.exports = router;