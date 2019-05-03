const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app = express();
const port = process.env.PORT || 5000

app.get('/', (req, res) => {
  res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
})

app.listen(port, () => {
  console.log(`App running on port ${port}`)
});