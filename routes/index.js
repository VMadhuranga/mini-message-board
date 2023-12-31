const express = require("express");
const router = express.Router();

const title = "Mini Message Board";
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: title, messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form", { title: title });
});

router.post("/new", function (req, res, next) {
  const { name, message } = req.body;
  messages.push({ text: message, user: name, added: new Date() });

  res.redirect("/");
});

module.exports = router;
