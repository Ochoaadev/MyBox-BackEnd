const Product = require("../models/producto")
const Favorito = require("../models/favorito")

//------------------------------------------------------------------------------------
const AddOrRemoveFav = async (req, res) => {
  const { usuarioId, productoId } = req.params;

  try {
    const favorito = await Favorito.findOne({ usuario: usuarioId, producto: productoId });

    if (favorito) {
      // El favorito ya está agregado, por lo que lo eliminamos
      await Favorito.findByIdAndRemove(favorito._id);
      res.status(200).json({ message: 'Favorito eliminado correctamente' });
    } else {
      // El favorito no está agregado, por lo que lo añadimos
      const nuevoFavorito = new Favorito({ usuario: usuarioId, producto: productoId });
      await nuevoFavorito.save();
      res.status(200).json({ message: 'Favorito agregado correctamente' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ocurrió un error al realizar la operación' });
  }
};

//-------------------------------------------------------------------------------------------
const getFavorites = async (req, res) => {
  try {
     const usuarioId = req.params.usuarioId;
     const favoritos = await Favorito.find({ usuario: usuarioId });
 
     if (!favoritos) {
       return res.status(404).json({ message: 'No se encontraron favoritos' });
     }
 
     // Buscamos los productos correspondientes a cada favorito
     const productosFavoritos = await Promise.all(favoritos.map(fav => Product.findById(fav.producto)));
 
     res.json(productosFavoritos);
  } catch (error) {
     console.error(error);
     res.status(500).json({ message: 'Ocurrió un error al realizar la operación' });
  }
 };

module.exports = {AddOrRemoveFav, getFavorites};
