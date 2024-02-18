
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

// Lire les tweet à partir de l'Id utilisateur

exports.showAllByUserId = async (req, res) => {
  const { userId } = req.params;

  try {
    // Récupérer les posts de l'utilisateur spécifié
    const userPosts = await prisma.post.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json(userPosts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'An error occurred while fetching user posts.' });
  }
}

// Lire un seul à partir de l'Id utilisateur

exports.showById = async (req, res) => {
  const { userId } = req.params;

  try {
    // Récupérer les posts de l'utilisateur spécifié
    const userPosts = await prisma.post.findMany({
      where: {
        userId: parseInt(userId),
      },
    });

    res.status(200).json(userPosts);
  } catch (error) {
    console.error('Error fetching user posts:', error);
    res.status(500).json({ error: 'An error occurred while fetching user posts.' });
  }
}
// Modification d'un tweet

exports.editTweet = async (req, res) => {
  const { id } = req.params;
  const { text } = req.body;

  try {
    // Vérifiez si le post existe
    const existingPost = await prisma.post.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    // Mettez à jour le texte du post dans la base de données
    const updatedPost = await prisma.post.update({
      where: {
        id: parseInt(id),
      },
      data: {
        text,
      },
    });

    res.status(200).json(updatedPost);
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'An error occurred while updating post.' });
  }
}

// Supprimer un tweet

exports.deleteTweet = async (req, res) => {
  const { postId } = req.params;

  try {
    // Vérifiez si le post existe
    const existingPost = await prisma.post.findUnique({
      where: {
        id: parseInt(postId),
      },
    });

    if (!existingPost) {
      return res.status(404).json({ error: 'Post not found.' });
    }

    // Supprimez le post de la base de données
    await prisma.post.delete({
      where: {
        id: parseInt(postId),
      },
    });

    res.status(200).json({ message: 'Post deleted successfully.' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'An error occurred while deleting post.' });
  }
};
