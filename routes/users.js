
const router = require('express').Router(); // creando un router
const  users  = require('../data/users.json') // ya que estos datos son necesarios para el enrutamiento,
                                      // debemos importarlo

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:userId', (req, res) => {
  const found = users.find((element) => element > 10);
  if(found){
    res.send(found)
  }
  else {
    res.status(404).send({ "message": "ID de usuario no encontrado" })
  }
})

module.exports = router; // exportando el router