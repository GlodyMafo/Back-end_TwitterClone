const express = require('express');
var cors = require('cors')
const app = express();

const tweetRoute = require('./Routes/tweetRoute.js');

const profilRoutes = require('./Routes/profilRoutes.js');

const loginRoute=require( './Routes/logInRouter.js');

const signinRoute=require('./Routes/signUpRoute.js');

const port = 3000;

app.use(express.json());

app.use(cors())

app.use('/tweets', tweetRoute);

app.use('/profil', profilRoutes);

app.use('/login',loginRoute);

app.use('/sign', signinRoute)

app.listen(port, () => { console.log(`Notre application tourne sur le port : http://localhost:${port}`) });