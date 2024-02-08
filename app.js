const express = require('express');

const app = express();

const tweetRoute = require('./Routes/tweetRoute.js')

const usersRoute = require('./Routes/usersRoutes.js');

const port = 8000;


app.use(express.json());

app.use('/tweets', tweetRoute);

app.use('/user', usersRoute);

app.listen(port, () => { console.log(`Notre application tourne sur le port : http://localhost:${port}`) });