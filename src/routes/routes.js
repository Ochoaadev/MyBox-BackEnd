var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic, itemList } = require("../controllers/AggProduct");

// const { itemList } = require ('../controllers/AggProduct');

const { itemUpdate, itemDelete } = require('../controllers/UpdDel')

const {FilterProducts } = require('../controllers/Filter_Products')
// ----------- Rutas ---------------

//Obtener
router.get("/ListarItem", itemList);

//Agregar un producto
router.post("/AgregarItem", itemsSolic);

//Actualizar
router.put('/items/:titulo', itemUpdate);

//Eliminar
router.delete('/item/:id', itemDelete);

router.get('/FilterProducts/:titulo', FilterProducts);

module.exports = router;
