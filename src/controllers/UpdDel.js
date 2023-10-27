const model = require('../models/producto');
const fs = require('fs'); // importa el módulo fs para acceder al sistema de archivos


const itemUpdate = async (req, res) => {
  try {
    const titulo = req.params.titulo;

    const updatedData = {
      marca: req.body.marca,
      modelo: req.body.modelo,
      cantidad: req.body.cantidad,
      precio_adquisicion: req.body.precio_adquisicion,
      fecha_adquisicion: req.body.fecha_adquisicion
    };

    const result = await model.findOneAndUpdate({ titulo: titulo }, updatedData);

    if (result) {
      res.status(200).json({ message: "Item actualizado exitosamente", status: 200 });
    } else {
      res.status(400).json({ message: "No se encontró ningún item con el título proporcionado", status: 400 });
    }
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({ message: "Error al intentar actualizar el item", status: 500 });
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
  
