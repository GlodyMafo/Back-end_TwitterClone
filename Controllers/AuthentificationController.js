const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


// // fonction pour l'inscription

exports.signUpUser = async (req, res) => {
    const { email, name, password } = req.body;

    try {
      
        const existingUser = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (existingUser) {
            return res.status(400).json({ error: 'L\'adresse Email est déjà utillisé' });
        }

        // Hash du mot de passe (le cryptage)
        const hashedPassword = await bcrypt.hash(password, 10);

        // Création d'un nouveau compte
        const newUser = await prisma.user.create({
            data: {
                email,
                name,
                password: hashedPassword,
            },
        });

        res.status(201).json({ newUser });
    } catch (error) {
        console.error('Error signing up:', error);
        res.status(500).json({ error: 'Il y a eu une erreur à l\'inscription veuillez ressayer' });
    }
};


// // Fonction pour la connexion

exports.logInUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Vérifiez si l'utilisateur existe
        const user = await prisma.user.findUnique({
            where: {
                email,
            },
        });

        if (!user) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Vérifiez le mot de passe
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {
            return res.status(400).json({ error: 'Email ou mot de passe incorrect' });
        }

        // Créez un jeton JWT pour l'utilisateur
        const token = jwt.sign({ userId: user.id }, 'your_secret_key');

        res.status(200).json({ token });
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ error: 'Il y a eu une erreur lors votre connexion veuillez ressayer' });
    }
}


