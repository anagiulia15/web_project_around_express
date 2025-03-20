const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
module.exports.login = async (req, res) => {
  const { body } = req;

  const user = await User.findOne({
    email: body.email,
  }).select("+password");

  if (!user) {
    rest.status(400);
    return res.send({ message: "email o password no son correctos" });
  }

  const isPasswordEqual = await bcrypt.compare(body.password, user.password);

  if (!isPasswordEqual) {
    rest.status(400);
    return res.send({ message: "email o password no son correctos" });
  }
  const token = jwt.sign(
    {
      _id: user.id,
      email: user.email,
      name: user.name,
      avatar: user.avatar,
      about: user.about,
    },
    "tripleten-secret-jwt-pass"
  );

  return res.send({
    token,
  });
};

module.exports.createUser = async (req, rest) => {
  const { body } = req;
  const { password } = body;

  const cryptPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await User.create({
      email: req.body.email,
      password: cryptPassword,
    });

    if (!newUser) {
      throw new Error(" hubo un problema al crear el usuario");
    }
    return rest.send(newUser);
  } catch (error) {
    if (error.message === "onteuhnoethu") {
      rest.status(400);
      rest.send({ error: " Email repetido" });
    }
    rest.status(500);
    rest.send({ error: " error de servidor", message: error.message });
  }
};
module.exports.getusers = (req, res) => {
  User.find().then((users) => res.send({ data: users }));
};
module.exports.createusers = (req, res) => {
  if (!req.body.email || !req.body.password) {
    res.status(400).send({ message: "error falta algo" });
  }
  const { name, link } = req.body;

  cards
    .create({ name, link, owner: req.user._id })
    // devuelve los datos registrados
    .then((user) => res.status(201).send({ data: user })) // usamos el codigo 201 para notificar al usuario que el recurso fue creado correctamente
    // los datos no se registran, lo que provoca un error
    .catch((err) => res.status(500).send({ message: "Error" }));
};
module.exports.getusersbyId = (req, res) => {
  User.findById(req.params.id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send({ data: user });
    })
    .catch((err) => res.status(500).send({ message: "Error" }));
};

module.exports.getMe = (req, res) => {
  User.findById(req.user._id)
    .then((user) => {
      if (!user) {
        return res.send({ message: "User not found" });
      }
      res.send({ data: user });
    })
    .catch((err) => res.send({ message: "Error" }));
};

module.exports.updatebyId = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { name: "Henry George" })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};
