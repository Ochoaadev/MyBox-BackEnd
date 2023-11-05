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
  try {
    await model.findByIdAndDelete(req.params.id);
    res.send("Usuario eliminado");
  } catch (error) {
    res.status(500).send(error);
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

    res.status(200).json({ msg: "Usuario Actualizado Correctamente" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ msg: "Server error" });
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

module.exports = { GetUser, deleteUser, editUser, updatePassword };
