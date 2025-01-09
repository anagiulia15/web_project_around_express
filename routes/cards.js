const fs = require("fs");
const path = require("path");
const {
  getcards,
  createcard,
  deletecard,
  getcard,
} = require("../controllers/cards");

const router = require("express").Router();
router.get("/cards", getcards);
router.post("/cards", createcard);

router.delete("/cards/:cardId", deletecard);
router.get("/cards/:cardId", getcard);
module.exports = router;
