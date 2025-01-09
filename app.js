const express = require("express");
const mongoose = require("mongoose");
const routerCards = require("./routes/cards");
const routerUsers = require("./routes/users");
mongoose.connect("mongodb://localhost:27017/mydb");
const app = express();
const notfound = (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
};
app.use((req, res, next) => {
  req.user = {
    _id: "5d8b8592978f8bd833ca8133", // pega el _id del usuario de prueba que creamos en el paso anterior
  };

  next();
});
app.use(express.json());
app.use("/", routerUsers);
app.use("/", routerCards);
app.use("*", notfound);
app.listen(3001);
