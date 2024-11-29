const router = require("express").Router(); // creando un router
const users = require("../data/users.json"); // ya que estos datos son necesarios para el enrutamiento,
// debemos importarlo

router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  const user = users.find((item) => item._id === req.params.id);
  if (!user) {
    res.send({
      message: "Recurso no encontrado",
    });
    return;
  }
  res.send(user);
});

module.exports = router; // exportando el router
