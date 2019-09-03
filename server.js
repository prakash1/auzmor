const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const Prpoerties = require('./config/properties');
const db = require('./app/utils/dbUtils');
var smsRoutes = require('./app/routes/sms');
// create express app
const app = express();
var router = express.Router();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse requests of content-type - application/json
app.use(bodyParser.json());
app.use(router);
smsRoutes(router);

// define a simple route
app.get('/', (req, res) => {
    res.json({"message": "Welcome to Sample application."});
});
app.prependOnceListener('/', (req, res) => {
    res.json({"message": "Welcome to Sample application."});
});

// listen for requests
app.listen(Prpoerties.PORT, ( ) => {
    console.log("Server is listening on port "+Prpoerties.PORT);
});