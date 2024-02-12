const express = require('express');

const app = express();

const tweetRoute = require('./Routes/tweetRoute.js');

const usersRoute = require('./Routes/usersRoutes.js');

const loginRoute=require( './Routes/logInRouter.js');

const signinRoute=require('./Routes/signUpRoute.js');

const port = 3000;


app.use(express.json());

app.use('/tweets', tweetRoute);

app.use('/user', usersRoute);

app.use('/login',loginRoute);

app.use('/sign', signinRoute)

app.listen(port, () => { console.log(`Notre application tourne sur le port : http://localhost:${port}`) });