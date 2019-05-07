const validateSignup = require('../validators').validateSignup;
const validateSignin = require('../validators').validateSignin;

module.exports = {
  signUp: (req, res, next) => {
    if (validateSignup(req.body)) {
      return res.status(400).send({ message: "An error has occurred", status: 400, error: validateSignup(req.body) });
    }

    next();
  },

  signIn: (req, res, next) => {
    if (validateSignin(req.body)) {
      return res.status(400).send({ message: "An error has occured", status: 400, error: validateSignin(req.body) });
    }

    next();
  }
}
