const Favorito = require('../models/favorito');
const mongoose = require('mongoose');

// Función para verificar si un valor es un ObjectId válido
function isValidObjectId(id) {
 return mongoose.Types.ObjectId.isValid(id);
}

// Controlador para agregar un favorito
const addFavorito = async (req, res) => {
 try {
    const { userId, categoria } = req.body;

    // Verificar si los valores de userId y categoria son ObjectId válidos
    if (!isValidObjectId(userId) || !isValidObjectId(categoria)) {
      return res.status(400).json({ error: 'Invalid ObjectId(s)' });
    }

    const favorito = new Favorito({ userId, categoria });
    await favorito.save();
    res.send('Producto Agregado a favorito exitosamente');

    res.status(201).json(favorito);
 } catch (error) {
    res.status(500).json({ error: error.message });
 }
};
//Eliminar
const deleteFavorito = async (req, res) => {
 try {
    await Favorito.findByIdAndDelete(req.params.id);
    res.send('Favorito eliminado');
 } catch (error) {
    res.status(500).send(error);
 }
};
//Obtener(ID)
const getFavoritos = async (req, res) => {
 try {
    const favoritos = await Favorito.find({ userId: req.params.userId });
    res.send(favoritos);
 } catch (error) {
    res.status(500).send(error);
 }
};

module.exports = { addFavorito, deleteFavorito, getFavoritos}