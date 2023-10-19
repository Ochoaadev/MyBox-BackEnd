var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic, itemList } = require("../controllers/AggProduct");

// const { itemList } = require ('../controllers/AggProduct');

const { itemUpdate, itemDelete } = require('../controllers/UpdDel')

// ----------- Rutas ---------------

//Obtener
router.get("/ListarItem", itemList);

//Agregar un producto
router.post("/AgregarIItem", itemsSolic);

//Actualizar
router.patch('/item/:id', upload.single('imagen'), itemUpdate);


//Eliminar
app.delete('/item/:id', upload.single('imagen'), itemDelete);

module.exports = router;
