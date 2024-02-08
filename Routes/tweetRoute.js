const express = require('express');

const tweetsRoute = express.Router();

const tweetsController = require('../Controllers/tweetsController');

const multer=require ('../Controllers/imgController.js');

const upload = multer({ dest: './les_images/'});



// Lire tous les tweets

tweetsRoute.get('/', upload.single('image'), tweetsController.showTweet);


// Créer un nouveau tweet

tweetsRoute.post('/', tweetsController.postTweet);


// Lire un tweet à partir de l'Id utilisateur

tweetsRoute.get('/:id', tweetsController.showById);

// Modification d'un tweet

tweetsRoute.put('/:id',upload.single('image'), tweetsController.editTweet);

// Supprimer un tweet

tweetsRoute.delete('/:id', tweetsController.deleteTweet);

module.exports = tweetsRoute;
