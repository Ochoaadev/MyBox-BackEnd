var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic } = require("../controllers/AggProduct");


// ----------- Rutas ---------------

//Obtener
router.get("/");

//Agregar un producto
router.post("/AgregarIItem", itemsSolic);

//Actualizar
router.patch("actualizar");

//Eliminar
router.delete("/eliminar");

module.exports = router;
