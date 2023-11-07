var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic, itemList } = require("../controllers/AggProduct");

const {AddOrRemoveFav, getFavorites} = require('../controllers/Fav');

const { itemUpdate, itemDelete } = require("../controllers/UpdDel");

const { FilterProducts, Fil_Cat, Nada } = require("../controllers/Filter_Products");

const {getAllProducts} = require('../controllers/pagination')

//-----------Categorias--------------
const {
  cat_List,
  cat_add,
  del_cat
} = require("../controllers/Categoria_Get_Post_Del");


////-----------------Usuario-------------

const {
	GetUser, 
	deleteUser, 
	editUser,
  updatePassword,
  user_list
} = require("../controllers/userM")

//-----------Login y Registro--------------
const { login, register } = require("../controllers/Users/Login-Register");

//----------- Validar token--------------
const { Authenticate, ValidateRol } = require("../middlewares/JWT");

//------------Paginado-----------------

router.get('/productos/:page', getAllProducts);

// ----------- Rutas ---------------

//Obtener
router.get("/ListarItem", itemList);

//Agregar un producto
router.post("/AgregarItem", itemsSolic);

//Actualizar
router.put("/items/:id", itemUpdate);

//Eliminar
router.delete("/item/:id", itemDelete);
//----
router.get("/FilterProducts/:titulo/:page", FilterProducts);

router.get("/FilterProducts/", Nada);
router.get("/Filtrar_categorias/", Nada);

//------Categorias
router.get("/Listar_categorias", cat_List);
//---
router.get("/Filtrar_categorias/:categoria/:page", Fil_Cat)
router.post("/Agregar_categorias", cat_add);
router.delete("/Eliminar_categorias/:id", del_cat);

//Favoritos

router.put('/favoritos/:usuarioId/:productoId', AddOrRemoveFav);
router.get('/favoritos/:usuarioId', getFavorites);

//Rutas de registro
router.post("/registro", register);

//Rutas de login
router.post("/login", login);

//Ruta usuario 

router.get("/User", user_list);
router.get("/User/:id/get", GetUser);
router.delete('/User/:id', deleteUser);
router.put('/User/:id/edit', editUser);
router.put('/User/:id/Password', updatePassword);

//Validar Token
router.post("/Validate", Authenticate, ValidateRol);

module.exports = router;
