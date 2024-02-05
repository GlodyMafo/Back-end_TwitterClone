// Lire tous les tweets

const tweets = [];

exports.showTweet=(req, res) => {
        res.json(tweets);
      }

// Créer un nouveau tweet

exports.postTweet=(req, res)=>{
        const newTweet = req.body;
        newTweet.id = tweets.length + 1;
        tweets.push(newTweet);
        res.json(newTweet);  
}

// Lire un tweet à partir de l'Id utilisateur

exports.showById=(req, res) => {
        const tweetId = parseInt(req.params.id);
        const tweet = tweets.find((tweet) => tweet.id === tweetId);
        if (!tweet) {
          res.status(404).send('Tweet introuvable');
          return;
        }
        res.json(tweet);
      }

// Modification d'un tweet

exports.editTweet=(req, res) => {
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

exports.deleteTweet=(req, res) => {
        const tweetId = parseInt(req.params.id);
        const tweetIndex = tweets.findIndex((tweet) => tweet.id === tweetId);
        if (tweetIndex === -1) {
          res.status(404).send('Tweet introuvable');
          return;
        }
        tweets.splice(tweetIndex, 1);
        res.json({"message": "Tweet supprimé"});
      };