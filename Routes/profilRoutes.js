const express = require('express')

const profilRoutes = express.Router()

const profilController = require('../Controllers/profilController.js')

const upload = require('../Controllers/imgController.js');



// voir tous les utilisateurs

profilRoutes.get('/', profilController.profilUsers);


// Créer un nouveau profil

profilRoutes.post('/', upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), profilController.postProfil);


// Lire un tweet à partir de l'Id utilisateur

profilRoutes.get('/:userId', profilController.showProfilById);

// Modification d'un tweet

profilRoutes.put('/:userId',upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'cover', maxCount: 1 }]), profilController.editProfil);

// Supprimer un tweet

profilRoutes.delete('/:userId', profilController.deleteProfil);

module.exports = profilRoutes;
