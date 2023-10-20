const model = require('../models/producto');

const FilterProducts = async (req, res) => {
    const {
        titulo
    } = req.params;
    try {                                                     //Se validan si no hay un error      
        const registro = await model.find({titulo:{"$regex":titulo,"$options":"i"}}).sort({ titulo: -1 }).limit(5).exec();  //Se espera una respuesta y se utiliza find y limit para solo consultar 5 para consultar la tabla

        if (!registro?.length) {                                       //Se condiciona si no se encuentran registros 
            return res.status(404).json({ message: "Producto no encontrado" });    //Si la respuesta del servidor es 404 Se muestra el mensaje
        }
        res.status(200).json(registro);                      //Si la busqueda es satisfactoria se muestra la información
    }
    catch (error) {                                          //Se muestran los diferentes errores posibles
        res.status(500).json({ message: error.message });
    }
}
module.exports = { FilterProducts }