const express = require('express');

const tweetsRoute = express.Router();

const tweetsController = require('../Controllers/tweetsController');

const upload = require('../Controllers/imgController.js');



// Lire tous les tweets

tweetsRoute.get('/', tweetsController.showTweet);


// Créer un nouveau tweet

tweetsRoute.post('/', upload.single('image'), tweetsController.postTweet);


// Lire un tweet à partir de l'Id utilisateur

tweetsRoute.get('/:id', tweetsController.showById);

// Modification d'un tweet

tweetsRoute.put('/:id', upload.single('image'), tweetsController.editTweet);

// Supprimer un tweet

tweetsRoute.delete('/:id', tweetsController.deleteTweet);

module.exports = tweetsRoute;
