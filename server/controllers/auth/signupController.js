const user = require('../../models').user
const bcrypt = require('bcrypt');

module.exports = {
  create: (req, res) => {
    const hashedPassword = bcrypt.hashSync(req.body.password, 10);

    return user.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      username: req.body.username,
      password: hashedPassword
    })
    .then(user => {
      res.status(201).send({ message: "User created successfully", status: 201, data: user })
    })
    .catch(error => {
      res.status(400).send({ message: "User creation failed", status: 400, error: error })
    })
  },
}
