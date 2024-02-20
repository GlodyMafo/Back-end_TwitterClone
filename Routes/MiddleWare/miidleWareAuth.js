const jwt = require('jsonwebtoken');

function authMiddleware(req, res, next) {

    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ message: 'Token non fourni. Authentification échouée.' });
    }

    try {
      
        const decodedToken = jwt.verify(token, 'your_secret_key');

        req.user = decodedToken;

        next();
    } catch (error) {
    
        return res.status(401).json({ message: 'Token invalide. Authentification échouée.' });
    }
}

module.exports = authMiddleware;
