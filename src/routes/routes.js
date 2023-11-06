var express = require("express");
var router = express.Router();

// ----------- Controladores ---------------
const { itemsSolic, itemList } = require("../controllers/AggProduct");

// const { itemList } = require ('../controllers/AggProduct');

const { itemUpdate, itemDelete } = require("../controllers/UpdDel");

const { FilterProducts } = require("../controllers/Filter_Products");

//-----------Categorias--------------
const {
  cat_List,
  cat_add,
  del_cat,
  Fil_Cat
} = require("../controllers/Categoria_Get_Post_Del");

const {
  addFavorito,
  deleteFavorito,
  getFavorito,
} = require("../controllers/Fav");

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

// ----------- Rutas ---------------

//Obtener
router.get("/ListarItem", itemList);

//Agregar un producto
router.post("/AgregarItem", itemsSolic);

//Actualizar
router.put("/items/:id", itemUpdate);

//Eliminar
router.delete("/item/:id", itemDelete);

router.get("/FilterProducts/:titulo", FilterProducts);

//------Categorias
router.get("/Listar_categorias", cat_List);Fil_Cat
router.get("/Filtrar_categorias/:categoria", Fil_Cat);
router.post("/Agregar_categorias", cat_add);
router.delete("/Eliminar_categorias/:id", del_cat);

//Favoritos

router.post('/favoritos', addFavorito);
router.delete('/favoritos/:id', deleteFavorito);
router.get('/favoritos', getFavorito);

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
