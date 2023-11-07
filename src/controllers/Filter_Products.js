const model = require("../models/producto");

const FilterProducts = async (req, res, next) => {
  const { titulo } = req.params;
  const page = req.params.page || 1;
  const limit = 20;
  const skip = (page - 1) * limit;
  const perPage = 20;

  try {
    //Se validan si no hay un error
    await model
      .find({ titulo: { $regex: titulo, $options: "i" } })
      .skip(skip)
      .limit(limit)
      .exec()
      .then((registro) => {
        model
          .countDocuments()
          .then((count) => {
            const totalPages = Math.ceil(count / perPage);
            res.status(200).json({
              products: registro,
              current: page,
              totalPages,
            }); //Si la busqueda es satisfactoria se muestra la información
          })
          .catch((err) => {
            next(err);
          });
      });
  } catch (error) {
    //Se muestran los diferentes errores posibles
    res.status(500).json({ message: error.message });
    next(err);
  }
};

//----------------------------------------------------------------------------------------------------------

const Fil_Cat = async (req, res) => {
  const { categoria } = req.params;
  console.log(categoria, req.params, "hola");
  if (categoria == "" || categoria == null || categoria == undefined) {
    return res.status(200).json({ message: "Categoria vacia" });
  }
  try {
    // Se validan si no hay un error
    const registro = await model
      .find({ category: { $regex: categoria, $options: "i" } })
      .exec();

    if (!registro?.length) {
      //Se condiciona si no se encuentran registros
      return res.status(404).json({ message: "Categoria no encontrada" }); //Si la respuesta del servidor es 404 Se muestra el mensaje
    }
    res.status(200).json(registro); //Si la busqueda es satisfactoria se muestra la información
  } catch (error) {
    //Se muestran los diferentes errores posibles
    res.status(500).json({ message: error.message });
  }
};
//----------Fin de la función para Filtrar Categorias

//Inicio de la función para filtrar Categorias

// const Fil_Cat = async (req, res) => {
//   const { categoria } = req.params;
//   const page = parseInt(req.query.page) || 1;
//   const limit = parseInt(req.query.limit) || 20;

//   if (categoria == "" || categoria == null || categoria == undefined) {
//      return res.status(200).json({ message: "Categoria vacia" });
//   }
//   try {
//      const skip = (page - 1) * limit;
//      const totalProducts = await model.countDocuments({ category: { $regex: categoria, $options: "i" } });
//      const totalPages = Math.ceil(totalProducts / limit);

//      const registro = await model
//        .find({ category: { $regex: categoria, $options: "i" } })
//        .skip(skip)
//        .limit(limit)
//        .exec();

//      if (!registro?.length) {
//        return res.status(404).json({ message: "Categoria no encontrada" });
//      }
//      res.status(200).json({ data: registro, page, totalPages });
//   } catch (error) {
//      res.status(500).json({ message: error.message });
//   }
//  };

//----------Fin de la función para Filtrar Categorias
const Nada = async (req, res) => {
  try {
    console.log("Nada");
    res.status(200);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { FilterProducts, Fil_Cat, Nada };
