const model = require('../models/producto');
const fs = require('fs'); // importa el módulo fs para acceder al sistema de archivos


const itemUpdate = async (req, res) => {
  try {
    const itemId = req.params.id; // Obtén el ID del item que se desea editar
    const updatedData = {
      titulo: req.body.titulo,
      imagen: req.file.path,
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
     if (!deleted) return res.status(404).send('No item found.');
     res.send(deleted);
  } catch (err) {
     res.status(500).send(err);
  }
 };
  module.exports = { itemUpdate, itemDelete };
  
