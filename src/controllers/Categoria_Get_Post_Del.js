//Importar modelo de categorias.
const model = require("../models/categorias");

//----------------------------------------------------------------------------------------------------------
//Iniciar la función para  consultar las categorias llamada cat_list.
const cat_List = async (req, res) => {
   try {
      //Se inicializa cateroias con el model.find realizando la busqueda de los records.
      const categorias = await model.find();
      //Se valida la respuesta de la base de datos.
      res.status(200).json(categorias);
   } catch (error) {
      //Se muestra el error recibido en console log, en caso de ser asi.
      console.log("Error:", error);
      //Si la respuesta es 500 algun parametro no coincide y se retorna el mensaje o por conexión.
      res
      .status(500)
      .json({ message: "Por favor verificar, error al intentar consultar las categorias.", status: 500 });
   }
};
//Fin de la función Cat_List
//----------------------------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
//Inicio de la función CAT_ADD, para agregar productos a Categorias  usando data.save para mongodb
const cat_add = async(req, res) => {
   try {
      //Se reciben los parametros enviados en el body en un objeto llamado json.
      const json = {
         name: req.body.name,
      };

      // Validamos que no falten datos en el objeto json
      if (!json.name) {
         return res
        .status(400)
        //Si el error es 400 es por qué no se estan transfiriendo los valores correctos.  
        .json({ message: "Nombre de Categoria es requerida.", status: 400 });
        //Se muestra el mensaje, indicando las posibles causas, en este caso categoria es una sola columna llamada name.
      }
      //Se almacena en data el json
      const data = new model(json);
      await data.save();
      //Se guarda la data utilizando los parametro data.save.

      //Se valida la respuesta de la base de datos, dependiendo se muestra el mensaje de exito de lo contrario el
      //mensaje de error.
      res
      .status(200)
      .json({ message: "Categoría agregada exitosamente!", status: 200 });
   } catch (error) {
      console.log("Error", error);
      res
      .status(500)
      .json({ message: "Error al intentar agregar la Categoría", status: 500 });
   }
};
//--Fin de la función CAT_ADD
//-------------------------------------------------------------------------------------

//----------------------------------------------------------------------------------------------------------
//Inicio de la función DEL_CAT, para ELIMINAR productos a Categorias  usando  model.findByIdAndDelete(id) para mongodb

const del_cat = async(req, res) =>{
   //Se recibe el valor de id como parametro.
   const id = req.params.id;
   try {
      //Se realiza el llamado de findByIdAndDelete(id) transfiriendo id, para eliminar dicho record.
      const deleted = await model.findByIdAndDelete(id);
      //Se valida la respuesta del mismo.
      if (!deleted) return res.status(404).send('Error: No se encontró la categoria a eliminar.');
      res.status(200).json({ message: "Categoria Eliminada Satisfactoriamente!", status: 200, deleted: deleted });
  } catch (err) {
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
         return res.status(400).send('Error: El ID de la categoria proporcionada no es válida.');
      } else {
         return res.status(500).send('Error al intentar eliminar la Categoria.');
      }
  }
}
//--Fin de la función DEL_CAT
//-------------------------------------------------------------------------------------


module.exports = { cat_List,cat_add, del_cat};
//Se exportan ambas funciones.