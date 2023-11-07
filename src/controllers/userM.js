const model = require("../models/users");
const bcrypt = require("bcrypt");

//<<<<<<<<<<<<<<<<<<<<<<<Obtener usuario

const GetUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await model.findById(id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado", status: 404 });
    }

    res.status(200).json(user);
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({ message: "Error al intentar listar los items", status: 500 });
  }
};

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>Eliminar Usuario

const deleteUser = async (req, res) => {
   const id = req.params.id;
   try {
      //Se realiza el llamado de findByIdAndDelete(id) transfiriendo id, para eliminar dicho record.
      const deleted = await model.findByIdAndDelete(id);
      //Se valida la respuesta del mismo.
      if (!deleted) return res.status(404).send('Error: No se encontró el Usuario a eliminar.');
      res.status(200).json({ message: "Usuario Eliminado Satisfactoriamente!", status: 200, deleted: deleted });
  } catch (err) {
      if (err.name === 'CastError' && err.kind === 'ObjectId') {
         return res.status(400).send('Error: El ID del Usuario proporcionada no es válida.');
      } else {
         return res.status(500).send('Error al intentar eliminar el Usuario.');
      }
  }
};

//>>>>>>>>>>>>>>>>Editar usuario

const editUser = async (req, res) => {
  try {
    let user = await model.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ msg: "Usuario no encontrado" });
    }
    user.name = req.body.name;
    user.lastname = req.body.lastname;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.username = req.body.username;
    user.gender = req.body.gender;

    await user.save();

    res.status(200).json({ msg: "Usuario Actualizado Correctamente", status:200 });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error",status:500 });
  }
};

//<<<<<<<<<<<<<<<<<<<<<<<Actualizar Contraseña>>>>>>>>>>>>>>>>

const updatePassword = async (req, res) => {
  try {
    const { id } = req.params;
    const { oldPassword, newPassword } = req.body;

    const user = await model.findById(id);
    if (!user) {
      return res
        .status(404)
        .json({ message: "Usuario no encontrado", status: 404 });
    }

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Contraseña antigua incorrecta" });
    }

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(newPassword, salt);

    await user.save();

    res.status(200).json({ message: "Contraseña actualizada correctamente" });
  } catch (error) {
    console.log("Error:", error);
    res
      .status(500)
      .json({
        message: "Error al intentar actualizar la contraseña",
        status: 500,
      });
  }
};
//----------------------------------------------------------------------------------------------------------
//Iniciar la función para  consultar los usuarios
const user_list = async (req, res) => {
  try {
     //Se inicializa usuarios con el model.find realizando la busqueda de los records.
     const user_list = await model.find();
     //Se valida la respuesta de la base de datos.
     res.status(200).json(user_list);
  } catch (error) {
     //Se muestra el error recibido en console log, en caso de ser asi.
     console.log("Error:", error);
     //Si la respuesta es 500 algun parametro no coincide y se retorna el mensaje o por conexión.
     res
     .status(500)
     .json({ message: "Por favor verificar, error al intentar consultar los usuarios.", status: 500 });
  }
};
//Fin de la función User_List
//----------------------------------------------------------------------------------------------------------


module.exports = { GetUser, deleteUser, editUser, updatePassword, user_list };
