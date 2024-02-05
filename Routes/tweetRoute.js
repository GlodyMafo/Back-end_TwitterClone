const express=require('express')
const tweetsRoute=express.Router()

const tweetsController=require('../Controllers/tweetsController') 



// Lire tous les tweets

tweetsRoute.get('/tweets', tweetsController.showTweet);


// Créer un nouveau tweet

tweetsRoute.post('/tweets', tweetsController.postTweet);


// Lire un tweet à partir de l'Id utilisateur

tweetsRoute.get('/tweets/:id', tweetsController.showById);

// Modification d'un tweet

tweetsRoute.put('/tweets/:id', tweetsController.editTweet);

// Supprimer un tweet

tweetsRoute.delete('/tweets/:id', tweetsController.deleteTweet);

module.exports=tweetsRoute;
