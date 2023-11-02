var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic, itemList } = require("../controllers/AggProduct");

// const { itemList } = require ('../controllers/AggProduct');

const { itemUpdate, itemDelete } = require('../controllers/UpdDel')

const {FilterProducts } = require('../controllers/Filter_Products')

//-----------Categorias--------------
const { cat_List, cat_add, del_cat } = require("../controllers/Categoria_Get_Post_Del");

const {addFavorito, deleteFavorito, getFavoritos} = require ('../controllers/Fav')

//-----------Login y Registro--------------
const {login, register} = require("../controllers/Users/Login-Register");

// ----------- Rutas ---------------

//Obtener
router.get("/ListarItem", itemList);

//Agregar un producto
router.post("/AgregarItem", itemsSolic);

//Actualizar
router.put('/items/:id', itemUpdate);

//Eliminar
router.delete('/item/:id', itemDelete);

router.get('/FilterProducts/:titulo', FilterProducts);


//------Categorias
router.get("/Listar_categorias", cat_List);
router.post("/Agregar_categorias", cat_add);
router.delete("/Eliminar_categorias/:id", del_cat);

//Favoritos

router.post('/favoritos', addFavorito);
router.delete('/favoritos/:id', deleteFavorito);
router.get('/favoritos/:userId', getFavoritos);

//Rutas de registro
router.post("/registro", register);

//Rutas de login
router.post("/login", login);

module.exports = router;
