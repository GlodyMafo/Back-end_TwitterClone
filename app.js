const express = require('express');

const app = express();

const tweetRoute = require('./Controller/tweetRoute.js')

const usersRoute = require('./Controller/usersRoutes.js')

const port = 8000;


app.use(express.json());

app.use('/tweets', tweetRoute);

app.use('/user', usersRoute);

app.listen(port, () => { console.log(`Notre application tourne sur le port : http://localhost:${port}`) });