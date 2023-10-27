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
  try {
    const filtro = {
      titulo: req.body.titulo,
      marca: req.body.marca,
      modelo: req.body.modelo
    };

    const itemToRemove = await model.findOneAndDelete(filtro);

    if (itemToRemove) {
      res.status(200).json({message: "Item eliminado exitosamente", status: 200});
    } else {
      res.status(404).json({message: "Item no encontrado", status: 404});
    }
  } catch (error) {
    console.log('Error', error);
    res.status(500).json({message: "Error al intentar eliminar el item", status: 500});
  }
};
  
  module.exports = { itemUpdate, itemDelete };
  
