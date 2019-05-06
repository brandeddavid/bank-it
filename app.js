const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config()
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);

module.exports = app;
