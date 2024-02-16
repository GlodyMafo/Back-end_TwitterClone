
const users = [
    {
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
        "url": "https://via.placeholder.com/600/92c952",
        "thumbnailUrl": "https://via.placeholder.com/150/92c952",
        "like": 9122,
        "repost": 10
      }
];

const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()


//voir les utilisateurs

exports.showUsers = (req, res) => {
    res.json(users);
}

// Ajouter un nouvel utilisateur

exports.postUser = (req, res) => {
    const newUser = req.body;
    newUser.id = users.length + 1;
    newUser.image = req.file.path;
    users.push(newUser);
    res.json(newUser);
}

// Afficher un utilisateur par son id

exports.showUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (!user) {
        res.status(404).send("l'utilisateur est introuvable");
        return;
    }
    res.json(user);
}

// Modification les information d'un utilisateur

exports.editUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const updatedUser = req.body;
    const user = users.find((user) => user.id === userId);
    if (!user) {
        res.status(404).send('Utilisateur introuvable');
        return;
    }
    Object.assign(user, updatedUser);
    res.json(user);
}

// Supprimer un compte utilisateur

exports.deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
        res.status(404).send('Tweet introuvable');
        return;
    }
    users.splice(tweetIndex, 1);
    res.json({ "message": "L'utilisateur est supprimé avec succès" });
};