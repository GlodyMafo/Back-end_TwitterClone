const users=[];

exports.showUsers=(req, res) => {
    res.json(users);
  }

// Ajouter un nouvel utilisateur

exports.postUser=(req, res)=>{
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    res.json(newUser);  
}

// Afficher un utilisateur par son id

exports.showUserById=(req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find((user) => user.id === userId);
    if (!user) {
      res.status(404).send("l'utilisateur est introuvable");
      return;
    }
    res.json(user);
  }

// Modification les information d'un utilisateur

exports.editUser=(req, res) => {
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

exports.deleteTweet=(req, res) => {
    const tweetId = parseInt(req.params.id);
    const tweetIndex = users.findIndex((tweet) => tweet.id === tweetId);
    if (tweetIndex === -1) {
      res.status(404).send('Tweet introuvable');
      return;
    }
    users.splice(tweetIndex, 1);
    res.json({"message": "Tweet supprimé"});
  };
