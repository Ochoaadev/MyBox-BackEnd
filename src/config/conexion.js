require('dotenv').config();
//Configuracion de la base de datos

const mongoose = require('mongoose');

const uri = `mongodb+srv://${process.env.USER_DB}:${process.env.PASSWORD_DB}@mybox.n6jacmb.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

module.exports = () => {
  const Connection = () => {
    mongoose
      .connect(uri, 
        {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        })
      .then(() => console.log('Connected to database'))

      .catch(e => console.log('Not connected', e));
  };

  Connection();
};
