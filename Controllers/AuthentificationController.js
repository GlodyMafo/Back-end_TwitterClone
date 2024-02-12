const jwt = require('jsonwebtoken');

const users = [
    {
        id: 1,
        username: 'admin',
        password: 'password123',
    },

];


// Fonction de vérification de l'utilisateur
const authenticateUser = (username, password) => {
    const user = users.find(u => u.username === username && u.password === password);
    return user;
}

// fonction pour l'inscription

exports.signUpUser = (req, res) => {
    const { username, password } = req.body;

    const existingUser = users.find(u => u.username === username);
    if (existingUser) {
        return res.status(400).send('Utilisateur déjà existant');
    }

    const newUser = {
        id: users.length + 1,
        username,
        password,
    };
    users.push(newUser);

    res.status(201).send(newUser);
}


// Fonction pour la connexion

exports.logInUser = (req, res) => {
    const { username, password } = req.body;

    const user = authenticateUser(username, password);
    if (!user) {
        return res.status(401).send('Identifiants incorrects');
    }

    // Génération d'un token JWT
    const token = jwt.sign({ id: user.id }, 'secretKey', { expiresIn: '1h' });

    // Envoi d'une réponse
    res.status(200).send({
        message: 'Utilisateur authentifié',
        token,
    });
}


