const user = require('../../models').user

module.exports = {
  allUsers: (req, res) => {
    return user.findAll({ attributes: {
      exclude: ['password']
    }})
    .then(users => {
      res.status(200).send({ message: "Users fetched successfully", status: 200, data: users })
    })
    .catch(error => {
      res.status(400).send({ message: "An error occurred", status: 400, error: error })
    })
  }
}
