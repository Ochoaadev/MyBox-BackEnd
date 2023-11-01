const mongoose = require('mongoose')

const categoriasSchemas = new mongoose.Schema(
    {
        name:{
            type: String
        },
       
    }
);

module.exports = mongoose.model('categorias', categoriasSchemas)