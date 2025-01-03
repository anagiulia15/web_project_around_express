const fs = require("fs");
const path = require("path");
const { getcards, createcard, deletecard } = require("../controllers/cards");

const router = require("express").Router();
router.get("/cards", getcards);
router.post("/cards", createcard);

router.delete("/cards/:cardId", deletecard);
module.exports = router;
