const user = require('../../models').user
const bcrypt = require('bcrypt');

module.exports = {
  login: (req, res) => {
    let token;

    return user.findOne({
      where: {
        username: req.body.username
      },
    })
    .then(user => {
      if(!user) {
        return res.status(404).send({ message: "User not found", status: 404 })
      }
  
      if (!bcrypt.compareSync(req.body.password, user.password)) {
        return res.status(409).send({ message: "Incorrect password", status: 409 })
      }
      
      return res.status(200).send({ message: "Login successful", status: 200, data: user })
    })
    .catch(error => {
      return res.status(400).send({ message: "An error occurred", status: 400, error })
    })
  }
}