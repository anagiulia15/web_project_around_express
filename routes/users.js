const router = require("express").Router(); // creando un router
const fs = require("fs");
const path = require("path");
const mongoose = require("mongoose");
const { createusers, getusers, getusersbyId } = require("../controllers/users");

//  module.exports = mongoose.model('user', userSchema);
router.get("/users", getusers);

router.get("/users/:id", getusersbyId);
router.post("/users/", createusers);
module.exports = router; // exportando el router
