const express = require("express");
const { Register, login } = require("../controllers/userControllers");
const { isAuth } = require("../middlewares/auth");
const {
  RegisterValidation,
  loginValidation,
  validation,
} = require("../middlewares/validation");
const Router = express.Router();

// METHOD POST : register
// API : /register

Router.post("/register", RegisterValidation, validation, Register);

// Method post : login

Router.post("/login", loginValidation, validation, login);

// method get
// api : /current
Router.get("/current", isAuth, (req, res) => {
  res.send({ user: req.user });
});

module.exports = Router;
