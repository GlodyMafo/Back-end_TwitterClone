const express = require('express');
const fs = require('fs');

const app = express();

app.use(express.json());

// Fonction pour lire tous les tweets
app.get('/tweets', (req, res) => {
  fs.readFile('tweets.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tweets = JSON.parse(data)['tweets'];
    res.json(tweets);
  });
});

// Fonction pour créer un nouveau tweet
app.post('/tweets', (req, res) => {
  const newTweet = req.body;
  fs.readFile('tweets.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tweets = JSON.parse(data)['tweets'];
    newTweet.id = tweets.length + 1;
    tweets.push(newTweet);
    fs.writeFile('tweets.json', JSON.stringify({ tweets }, null, 4), (err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json(newTweet);
    });
  });
});

// Fonction pour lire un tweet spécifique
app.get('/tweets/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  fs.readFile('tweets.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tweets = JSON.parse(data)['tweets'];
    const tweet = tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      res.status(404).send('Tweet introuvable');
      return;
    }
    res.json(tweet);
  });
});

// Fonction pour mettre à jour un tweet
app.put('/tweets/:id', (req, res) => {
  const tweetId = parseInt(req.params.id);
  const updatedTweet = req.body;
  fs.readFile('tweets.json', 'utf-8', (err, data) => {
    if (err) {
      res.status(500).send(err);
      return;
    }
    const tweets = JSON.parse(data)['tweets'];
    const tweet = tweets.find((tweet) => tweet.id === tweetId);
    if (!tweet) {
      res.status(404).send('Tweet introuvable');
      return;
    }
    Object.assign(tweet, updatedTweet);
    fs.writeFile('tweets.json', JSON.stringify({ tweets }, null, 4), (err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }
      res.json
