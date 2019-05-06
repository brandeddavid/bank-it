const user = require('../../models').user

module.exports = {
  create(req, res) {
    return user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      password: req.body.password
    })
    .then(user => {
      res.status(201).send({ message: "User created successfully", status: 201, data: user })
    })
    .catch(error => {
      res.status(400).send({ message: "User creation failed", status: 400, error: error })
    })
  }
}
