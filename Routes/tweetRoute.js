const express = require('express');

const tweetsRoute = express.Router();

const tweetsController = require('../Controllers/tweetsController');

const upload = require('../Controllers/imgController.js');



// Lire tous les tweets

tweetsRoute.get('/', tweetsController.showTweet);


// Créer un nouveau tweet

tweetsRoute.post('/',upload.array('pictures', 5), tweetsController.postTweet);


// Lire les tweets à partir de l'Id utilisateur

tweetsRoute.get('/:userId/Post', tweetsController.showAllByUserId );

// Modification d'un tweet

tweetsRoute.put('/:id', tweetsController.editTweet);

// Supprimer un tweet

tweetsRoute.delete('/:id', tweetsController.deleteTweet);

//Liker un post 

tweetsRoute.post('/:id/like')

module.exports = tweetsRoute;
