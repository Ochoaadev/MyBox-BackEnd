const mongoose = require('mongoose');
const { Schema } = mongoose;

const favoritoSchema = new Schema({
 categoria: { 
    type: Schema.Types.ObjectId, 
    ref: 'Categoria' 
},
 userId: {
     type: Schema.Types.ObjectId,
      ref: 'User' 
    }
});

module.exports =  mongoose.model('Favorito', favoritoSchema);