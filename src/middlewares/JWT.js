const jwt = require("jsonwebtoken");

// json web token (JWT)

function GenerarToken(user) {
  const payload = {
    id: user.id,
    username: user.username,
    email: user.email,
    role: user.role,
  };
  const secret = process.env.TOKEN_SECRET;
  const options = {
    expiresIn: "1h",
  };
  return jwt.sign(payload, secret, options);
}

function Authenticate(req, res, next) {

  if (!req.headers.authorization) {
    //No hay token
    res.sendStatus(400);
    return;
  }

  //Extrayendo el token
  var token = req.headers.authorization.replace("Bearer ", "");

  try {
    //verificando token
    jwt.verify(token, process.env.secreto);
    next();
  } catch (error) {
    //No tienes acceso
    res.sendStatus(400);
  }
}

function DecodeToken(token) {
    return new Promise((resolve, reject) => {
        let payload = jwt.decode(token.replace('Bearer ', ''));
        resolve(payload);
    })
}

const ValidateRol = (token, roles) => {

    try {
        //Extrayendo el token
        const payload=DecodeToken(token)
        //Comparando roles
        if (roles == payload.roles) {
            res.sendStatus(200)
            next();
        } else {
            res.sendStatus(400);
        }

    } catch (error) {
        //No tienes acceso
        res.sendStatus(400);
    }
}

module.exports = {
  GenerarToken,
  Authenticate,
  DecodeToken
};
