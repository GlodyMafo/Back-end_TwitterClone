const express = require('express')

const usersRoute = express.Router()

const usersController = require('../Controllers/usersController')



// voir tous les utilisateurs

usersRoute.get('/', usersController.showTweet);


// Créer un nouveau tweet

usersRoute.post('/', usersController.postTweet);


// Lire un tweet à partir de l'Id utilisateur

usersRoute.get('/:id', usersController.showById);

// Modification d'un tweet

usersRoute.put('/:id', usersController.editTweet);

// Supprimer un tweet

usersRoute.delete('/:id', usersController.deleteTweet);

module.exports = usersRoute;
