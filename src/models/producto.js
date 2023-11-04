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
        category:{
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
        },
        create:{
            type: Date,
            default: Date.now()
        }
    }
);

module.exports = mongoose.model('products', itemsSchemas)