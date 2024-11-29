const express = require("express");

const routerCards = require("./routes/cards");
const routerUsers = require("./routes/users");

const app = express();

app.use(routerUsers);
app.use(routerCards);
app.get("/", (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
});
app.listen(3000);
