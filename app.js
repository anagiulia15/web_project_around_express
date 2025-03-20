const express = require("express");
const mongoose = require("mongoose");
const routerCards = require("./routes/cards");
const routerUsers = require("./routes/users");
const auth = require("./middleware/auth");
const Joi = require("joi");
const { login, createUser } = require("./controllers/users");
const { celebrate } = require("celebrate");
mongoose.connect("mongodb://localhost:27017/mydb");
const app = express();
const cors = require("cors");
// inclúyelos antes de otras rutas
app.use(
  cors({
    origin: ["http://localhost:5173"],
  })
);
const notfound = (req, res) => {
  res.status(404).send({ message: "Recurso solicitado no encontrado" });
};

app.get("/", (req, res) => {
  res.send("Hola");
});
app.post(
  "/users",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required(),
      age: Joi.number().integer(),
      role: Joi.string().default("admin"),
    }),
  }),
  (req, res) => {
    res.send("Users");
  }
);

app.get("/crash-test", () => {
  setTimeout(() => {
    throw new Error("El servidor va a caer");
  }, 0);
});
app.use(express.json());
app.post("/signin", login);
app.post("/signup", createUser);
app.use(auth);
app.use("/", routerUsers);
app.use("/", routerCards);
app.use("*", notfound);

app.listen(4000, () => {
  console.log("Server on port");
});
