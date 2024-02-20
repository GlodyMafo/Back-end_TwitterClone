const express = require('express');

const tweetsRoute = express.Router();

const tweetsController = require('../Controllers/tweetsController');

const upload = require('../Controllers/imgController.js');

const authMiddleware = require('./MiddleWare/miidleWareAuth.js');



// Lire tous les tweets

tweetsRoute.get('/',authMiddleware, tweetsController.showTweet);


// Créer un nouveau tweet

tweetsRoute.post('/',authMiddleware,upload.array('pictures', 5), tweetsController.postTweet);


// Lire les tweets à partir de l'Id utilisateur

tweetsRoute.get('/:userId',authMiddleware, tweetsController.showAllByUserId );

// Modification d'un tweet

tweetsRoute.put('/:id',authMiddleware, tweetsController.editTweet);

// Supprimer un tweet

tweetsRoute.delete('/:id',authMiddleware, tweetsController.deleteTweet);

//Liker un post 

tweetsRoute.post('/:id/like',authMiddleware)

module.exports = tweetsRoute;
