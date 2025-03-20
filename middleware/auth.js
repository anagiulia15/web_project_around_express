const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const tokenBearer = req.headers.authorization;
  if (tokenBearer) {
    const token = tokenBearer.replace("Bearer ", "");
    try {
      const payload = jwt.verify(token, "tripleten-secret-jwt-pass");
      req.user = payload;
      next();
    } catch (err) {
      return res
        .status(403)
        .send({ message: "token no valido", error: err.message });
    }
  }
  return res.status(403).send({ message: "token no valido" });
  //req.user = payload;
};

// Bearer erertyy
