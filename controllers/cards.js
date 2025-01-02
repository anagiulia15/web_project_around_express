const cards = require("../models/cards");
const User = require("../models/user");
const fs = require("fs");

module.exports.getcards = (req, res) => {
  card
    .findbyId(req.params.id)
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};
module.exports.createcard = (req, res) => {
  console.log(req.user._id); // _id se volverá accesible
  console.log(req.body.name);
  console.log(req.body.link);
  if (!req.body.name || !req.body.link) {
    res.status(400).send({ message: "error" });
  }

  const { name, about } = req.body;

  card
    .create({ name, about })
    // devuelve los datos registrados
    .then((user) => res.status(201).send({ data: user })) // usamos el codigo 201 para notificar al usuario que el recurso fue creado correctamente
    // los datos no se registran, lo que provoca un error
    .catch((err) => res.status(500).send({ message: "Error" }));
};

module.exports.deletecard = (req, res) => {
  card
    .findByIdAndRemove(req.params.id, res)
    .then((user) => res.send({ req }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};
module.exports.getcards = (req, res) => {
  fs.readFile(filepath, (err, data) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: "error" });
      return;
    }
  });
};
module.exports.updateLikes = (req, res) => {
  router.patch("/:id", (req, res) => {
    // actualiza el nombre del usuario encontrado por _id
    cards
      .findByIdAndUpdate(req.params.id, { $addToSet: { likes: req.user._id } }) // agrega _id al array si aún no está ahí
      .then((user) => res.send({ data: cards }))
      .catch((err) => res.status(500).send({ message: "Error" }));
  });
};
module.exports.likeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } }, // agrega _id al array si aún no está ahí
    { new: true }
  );
module.exports.removeLikes = (req, res) => {
  res.send({ cards: data.toString("utf8") });
};
module.exports.dislikeCard = (req, res) =>
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } }, // elimina _id del array
    { new: true }
  );
