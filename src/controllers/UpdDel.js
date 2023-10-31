const model = require('../models/producto');
const { UploadImage } = require("../config/claudinary");


const itemUpdate = async (req, res) => {
  let image_url;
  if (req.file) {
    console.log(req.file.path);
    image_url = await UploadImage(req.file.path);
  }
  try {
    const itemId = req.params.id; // Obtén el ID del item que se desea editar
    const updatedData = {
      imagen: image_url,
      titulo: req.body.titulo,
      marca: req.body.marca,
      modelo:req.body.modelo,
      cantidad:req.body.cantidad,
      precio_adquisicion: req.body.precio_adquisicion,
      fecha_adquisicion: req.body.fecha_adquisicion
    };

    const updatedItem = await model.findByIdAndUpdate(itemId, updatedData, { new: true });
    // Encuentra y actualiza el item en la base de datos, y regresa el item actualizado

    if (updatedItem) {
      res.status(200).json({ message: "Item actualizado exitosamente", status: 200 });
    } else {
      res.status(404).json({ message: "No se encontró el item", status: 404 });
    }
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: "Error al intentar editar el item", status: 500 });
  }
};

const itemDelete = async (req, res) => {
  const id = req.params.id;
  
  try {
      const deleted = await model.findByIdAndDelete(id);
      if (!deleted) return res.status(404).send('Error: No se encontró el producto que se desea eliminar.');
      res.status(200).json({ message: "Producto eliminado exitosamente", status: 200, deleted: deleted });
  } catch (err) {
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
         return res.status(400).send('Error: El ID del producto proporcionado no es válido.');
      } else {
         return res.status(500).send('Error al intentar eliminar el item.');
      }
  }
 };

  module.exports = { itemUpdate, itemDelete };
  
