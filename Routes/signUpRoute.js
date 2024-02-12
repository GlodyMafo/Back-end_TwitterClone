const express = require('express');

const signup = express.Router();

const authentification = require("../Controllers/AuthentificationController.js")

signup.post('/', authentification.signUpUser);

module.exports = signup;