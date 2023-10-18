const mongoose = require('mongoose')

const itemsSchemas = new mongoose.Schema(
    {
        titulo:{
            type: String
        },
        imagen:{
            type: String
        },
        marca:{
            type: String
        },
        modelo:{
            type: String
        },
        cantidad:{
            type: Number
        },
        precio_adquisicion:{
            type: Number
        },
        fecha_adquisicion:{
            type: Date
        }
    }
);

module.exports = mongoose.model('Products', itemsSchemas)