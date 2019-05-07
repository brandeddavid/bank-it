const user = require('../../models').user

module.exports = {
  login: (req, res) => {
    return user.findOne({
      where: {
        username: req.body.username
      }
    })
    .then(user => {
      if(!user){
        res.status(404).send({ message: "User not found", status: 404 })
      }
      let password = user.password;

      if (password !== req.body.password){
        res.status(409).send({ message: "Incorrect password", status: 409 })
      }
    })
    .catch(error => {
      res.status(400).send({ message: "An error occurred", status: 400, error })
    })
  }
}