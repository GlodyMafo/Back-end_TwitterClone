const express = require('express')

const usersRoute = express.Router()

const usersController = require('../Controllers/usersController')



// voir tous les utilisateurs

usersRoute.get('/', usersController.showUsers);


// Créer un nouveau tweet

usersRoute.post('/', usersController.postUser);


// Lire un tweet à partir de l'Id utilisateur

usersRoute.get('/:id', usersController.showUserById);

// Modification d'un tweet

usersRoute.put('/:id', usersController.editUser);

// Supprimer un tweet

usersRoute.delete('/:id', usersController.deleteUser);

module.exports = usersRoute;
