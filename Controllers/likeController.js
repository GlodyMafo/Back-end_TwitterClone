




// app.post('/like_post/:id', async (req, res) => {
//     const { id } = req.params;
  
//     try {
//       // Récupération de la publication
//       const post = await Post.findById(id);
  
//       if (!post) {
//         return res.status(404).send({ error: 'Publication introuvable.' });
//       }
  
//       // Incrémentation du nombre de likes
//       post.likes++;
//       await post.save();
  
//       // Envoi du nombre de likes mis à jour
//       res.send({ likes: post.likes });
//     } catch (error) {
//       console.error(error);
//       res.status(500).send({ error: 'Une erreur est survenue.' });
//     }
//   });