var express = require('express');
var router = express.Router();

// ----------- Controladores ---------------


// ----------- Rutas ---------------

        //Obtener
 router.get("/")

        //Crear
router.post('/crear')

        //Actualizar
router.patch('actualizar')

        //Eliminar
router.delete('/eliminar')


module.exports = router;