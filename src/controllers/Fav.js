const Favorito = require("../models/favorito");
const mongoose = require("mongoose");
const { isEmpty } = require("validator");

//Verificación
function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

const addFavorito = async (req, res) => {
  try {
    const { username, categoria } = req.body;

    if (!isValidObjectId(categoria)) {
      return res.status(400).json({ error: "Invalid ObjectId(s)" });
    }

    if (isEmpty(username)) {
      return res
        .status(400)
        .json({ error: "Nombre de usuario invalido, vuelve a intentar" });
    }

    const favorito = new Favorito({ username, categoria });
    await favorito.save();
    res.status(201).json({ message: "Se ha registrado correctamente" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
const deleteFavorito = async (req, res) => {
  const { id } = req.params;

  try {
    await Favorito.findByIdAndDelete(id);
    res.status(200).json({ message: "Eliminado de manera exitosa" });
  } catch (error) {
    res.status(400).json({ error });
  }
};

const getFavorito = async (req, res) => {
  try {
    const favorito = await Favorito.find({});
    res.status(200).json(favorito);
  } catch (error) {
    res.status(400).json({ error });
  }
};

module.exports = { addFavorito, deleteFavorito, getFavorito };
