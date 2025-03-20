const router = require("express").Router(); // creando un router

const {
  createusers,
  getusers,
  getusersbyId,
  getMe,
} = require("../controllers/users");

//  module.exports = mongoose.model('user', userSchema);
router.get("/users", getusers); // todos los usuarios de la base de datos

router.get("/users/me", getMe); // solo nos trae un usuario con el ID

router.post("/users/", createusers); //
module.exports = router; // exportando el router
