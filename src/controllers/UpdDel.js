const model = require('../models/producto');
const fs = require('fs'); // importa el módulo fs para acceder al sistema de archivos


const itemUpdate = async (req, res) => {
    try {
      const { id } = req.params;
      
      const json = {
        titulo: req.body.titulo,
        marca: req.body.marca,
        modelo: req.body.modelo,
        cantidad: req.body.cantidad,
        precio_adquisicion: req.body.precio_adquisicion,
        fecha_adquisicion: req.body.fecha_adquisicion
      }
  
      if (req.file) {
        json.imagen = req.file.path;
      }
  
      const updatedItem = await model.findByIdAndUpdate(id, json, { new: true });
  
      if (!updatedItem) {
        return res.status(404).json({ message: "Item no encontrado", status: 404 });
      }
  
      res.status(200).json({ message: "Item actualizado exitosamente", status: 200 });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ message: "Error al intentar actualizar el item", status: 500 });
    }
  };
  

  const itemDelete = async (req, res) => {
    try {
      const { id } = req.params;
      const deletedItem = await model.findByIdAndDelete(id);
  
      if (!deletedItem) {
        return res.status(404).json({ message: "Item no encontrado", status: 404 });
      }
  
      // elimina la imagen asociada al producto
      fs.unlinkSync('../public' + req.file.originalname);
  
      res.status(200).json({ message: "Item eliminado exitosamente", status: 200 });
    } catch (error) {
      console.log('Error:', error);
      res.status(500).json({ message: "Error al intentar eliminar el item", status: 500 });
    }
  };
  
  module.exports = { itemUpdate, itemDelete };
  