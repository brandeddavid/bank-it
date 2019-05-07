var validateSignup = require('../validators').validateSignup

module.exports = {
  signUp(req, res, next) {
    if (validateSignup(req.body)) {
      return res.status(400).send({ message: "An error has occurred", status: 400, error: validateSignup(req.body) })
    }

    next()
  }
}
