const model = require('../../models/users');
const {Encrypt,Compare} = require('../../middlewares/bcrypt')
const {GenerarToken} = require('../../middlewares/JWT')

const register = async (req, res) => {
  console.log(req.body)
  let rol = "";
  if (req.body.rol == "Admin") {
    rol = "Admin";

  }else{
    rol = "User";
  }
  try {
    const { name, lastname, email, password, phone, username, gender } = req.body;
    if (!name || !email || !password || !lastname || !phone || !username || !gender) {
      return res.status(400).json({ message: "Faltan datos", status: 400});
    }

    const hash = await Encrypt(password);

    const user = { name, lastname, email, 'password':hash,phone,rol,username, gender}
    const data = new model(user)
    const payload = {
      username,
      email,
      rol
    }
    const token = GenerarToken(payload);

    console.log(hash,token,user)
    try {
      //Se procede a guardar
      await data.save();
      //En tal caso todo haya salido bien
      res.status(200).json({message: "Registro Exitoso",token, status: 200});
    } catch (error) {
      //Caso contrario
      console.log('Error', error);
      res.status(500).json({message: "Error al registrarse", status: 500});
    }    
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ message: "Faltan datos", status: 400});
    }

    const datas = async (dato) => {
      const documents = await model.find({"username": dato})
      return documents;
    }
    
    const data = await datas(username)

    if (!data) {
       return res.status(404).json({ message: "Usuario o contraseña incorrectos", status: 404 });
    }

    const user = { username, password }

    const match = await Compare(user.password, data[0].password);
    if (!match) {
      return res.status(401).json({ message: "Contraseña o Usuario incorrecto",status: 401});
    }
    const payload = {
      username: data[0].username,
      email: data[0].email,
      rol: data[0].rol,
    }
    const token = GenerarToken(payload);

    res.status(200).json({ token ,message: "Inicio de Sección Exitoso", status: 200 });

  } catch (error) {
    res.status(500).json({ message: "Contraseña o Usuario incorrecto", message1: error.message, status: 500 });
  }
};

module.exports = { register, login };