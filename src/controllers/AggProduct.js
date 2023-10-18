const model = require('../models/producto');

const itemsSolic = async (req, res) => {
  try {
    const json = {
      titulo: req.body.titulo,
      imagen: req.file.path,
      marca: req.body.marca,
      modelo:req.body.modelo,
      cantidad:req.body.cantidad,
      precio_adquisicion: req.body.precio_adquisicion,
      fecha_adquisicion: req.body.fecha_adquisicion
    }
    const data = new model(json)
    await data.save();
    
    res.status(200).json({message: "Item agregado exitosamente",status:200});
  } catch (error) {

    console.log('Error', error);
    res.status(500).json({message: "Error al intentar agregar el item",status:500});
  }

};

module.exports = {itemsSolic};