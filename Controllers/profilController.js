const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// //voir les profils

exports.profilUsers = async (req, res) => {
    try {
      // Récupérer tous les profils de la base de données
      const profiles = await prisma.profile.findMany();
  
      res.status(200).json(profiles);

    } catch (error) {
      console.error('Error fetching profiles:', error);
      res.status(500).json({ error: 'An error occurred while fetching profiles.' });
    }
  }

// // Ajouter un nouvel utilisateur

exports.postProfil = async (req, res) => {
    const { bio, avatar, cover, userId } = req.body;
  
    try {
      // Créez un nouveau profil dans la base de données
      const newProfile = await prisma.profile.create({
        data: {
          bio,
          avatar,
          cover,
          userId,
        },
      });
  
      res.status(201).json(newProfile);
    } catch (error) {
      console.error('Error creating profile:', error);
      res.status(500).json({ error: 'An error occurred while creating profile.' });
    }
  }


// // Afficher un utilisateur par son id

exports.showProfilById = async (req, res) => {
    const { userId } = req.params;
  
    try {
      // Récupérez le profil dans la base de données en fonction de l'ID de l'utilisateur
      const profile = await prisma.profile.findUnique({
        where: {
          userId: parseInt(userId),
        },
      });
  
      if (!profile) {
        return res.status(404).json({ error: 'Profile not found.' });
      }
  
      res.status(200).json(profile);
    } catch (error) {
      console.error('Error fetching profile:', error);
      res.status(500).json({ error: 'An error occurred while fetching profile.' });
    }
  };


// // Modification les information d'un utilisateur

exports.editProfil = async (req, res) => {
    const { userId } = req.params;
    const { bio, avatar, cover } = req.body;
  
    try {
      // Mettez à jour le profil dans la base de données en fonction de l'ID de l'utilisateur
      const updatedProfile = await prisma.profile.update({
        where: {
          userId: parseInt(userId),
        },
        data: {
          bio,
          avatar,
          cover,
        },
      });
  
      res.status(200).json(updatedProfile);
    } catch (error) {
      console.error('Error updating profile:', error);
      res.status(500).json({ error: 'An error occurred while updating profile.' });
    }
  }

// // Supprimer un compte utilisateur

exports.deleteProfil = async (req, res) => {
    const { userId } = req.params;
  
    try {
      // Vérifiez si le profil existe
      const existingProfile = await prisma.profile.findUnique({
        where: {
          id: parseInt(userId),
        },
      });
  
      if (!existingProfile) {
        return res.status(404).json({ error: 'Profile not found.' });
      }
  
      // Supprimez le profil de la base de données
      await prisma.profile.delete({
        where: {
          userId: parseInt(userId),
        },
      });
  
      res.status(200).json({ message: 'Profile deleted successfully.' });
    } catch (error) {
      console.error('Error deleting profile:', error);
      res.status(500).json({ error: 'An error occurred while deleting profile.' });
    }
  }



