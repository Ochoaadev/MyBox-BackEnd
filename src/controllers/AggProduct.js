const model = require('../models/producto');

const itemsSolic = async (req, res) => {
  try {
    const data = new model(req.body)
    await data.save();
    
    res.status(200).json({message: "Item agregado exitosamente",status:200});
  } catch (error) {

    console.log('Error', error);
    res.status(500).json({message: "Error al intentar agregar el item",status:500});
  }

};

module.exports = {itemsSolic};