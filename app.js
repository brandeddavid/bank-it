const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
dotenv.config()
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
})

module.exports = app;
