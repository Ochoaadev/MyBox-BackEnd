require('dotenv').config();

//Configuracion de la base de datos

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@mybox.n6jacmb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = () => {

  const handleError = (e) => {
     console.error(`Ocurrió un error al conectar con la base de datos: ${e.message}`);
     process.exit(1);
  };
 
  const Connection = () => {
     mongoose
       .connect(uri, 
         {
             useNewUrlParser: true, 
             useUnifiedTopology: true
         })
       .then(() => console.log('Conectado a la base de datos correctamente'))
 
       .catch(handleError);
  };
 
  Connection();
 };
