const express = require('express');

const logInRoute = express.Router();

const authentification=require("../Controllers/AuthentificationController.js")

logInRoute.post('/', authentification.logInUser);

module.exports=logInRoute;