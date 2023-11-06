const model = require('../models/producto');

const FilterProducts = async (req, res) => {
    const {
        titulo
    } = req.params;
    try {                                                     //Se validan si no hay un error      
        const registro = await model.find({titulo:{"$regex":titulo,"$options":"i"}}).exec();

        if (!registro?.length) {                                       //Se condiciona si no se encuentran registros 
            return res.status(404).json({ message: "Producto no encontrado" });    //Si la respuesta del servidor es 404 Se muestra el mensaje
        }
        res.status(200).json(registro);                      //Si la busqueda es satisfactoria se muestra la información
    }
    catch (error) {                                          //Se muestran los diferentes errores posibles
        res.status(500).json({ message: error.message });
    }
}


//----------------------------------------------------------------------------------------------------------
//Inicio de la función para filtrar Categorias

const Fil_Cat = async (req, res) => {
    const {
        categoria
    } = req.params;
    try {                                                     //Se validan si no hay un error      
        const registro = await model.find({category:{"$regex":categoria,"$options":"i"}}).exec();
 
        if (!registro?.length) {                                       //Se condiciona si no se encuentran registros 
            return res.status(404).json({ message: "Categoria no encontrada" });    //Si la respuesta del servidor es 404 Se muestra el mensaje
        }
        res.status(200).json(registro);                      //Si la busqueda es satisfactoria se muestra la información
    }
    catch (error) {                                          //Se muestran los diferentes errores posibles
        res.status(500).json({ message: error.message });
    }
 }
 //----------Fin de la función para Filtrar Categorias
 
 
module.exports = { FilterProducts, Fil_Cat }