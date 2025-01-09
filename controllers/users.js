const User = require("../models/user");
module.exports.getusers = (req, res) => {
  User.find().then((users) => res.send({ data: users }));
};
module.exports.createusers = (req, res) => {};
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
module.exports.updatebyId = (req, res) => {
  User.findByIdAndUpdate(req.params.id, { name: "Henry George" })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: "Error" }));
};
