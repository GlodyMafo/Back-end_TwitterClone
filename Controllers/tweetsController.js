
// Lire tous les tweets

// exports.showTweet = (req, res) => {
//   res.json(tweets);
// }

// Créer un nouveau tweet

exports.postTweet = async (req, res) => {
  const { text } = req.body;
  const picturePaths = req.files.map(file => file.path);

  try {
    // Créer un nouveau post dans la base de données avec les chemins des photos
    const newPost = await prisma.post.create({
      data: {
        text,
        pictures: picturePaths,
      },
    });

    res.status(201).json(newPost);
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'An error occurred while creating post.' });
  }
}

// Lire un tweet à partir de l'Id utilisateur

exports.showById = (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweet = tweets.find((tweet) => tweet.id === tweetId);
  if (!tweet) {
    res.status(404).send('Tweet introuvable');
    return;
  }
  res.json(tweet);
}

// Modification d'un tweet

exports.editTweet = (req, res) => {
  const tweetId = parseInt(req.params.id);
  const updatedTweet = req.body;
  const tweet = tweets.find((tweet) => tweet.id === tweetId);
  if (!tweet) {
    res.status(404).send('Tweet introuvable');
    return;
  }
  Object.assign(tweet, updatedTweet);
  res.json(tweet);
}

// Supprimer un tweet

exports.deleteTweet = (req, res) => {
  const tweetId = parseInt(req.params.id);
  const tweetIndex = tweets.findIndex((tweet) => tweet.id === tweetId);
  if (tweetIndex === -1) {
    res.status(404).send('Tweet introuvable');
    return;
  }
  tweets.splice(tweetIndex, 1);
  res.json({ "message": "Tweet supprimé" });
};