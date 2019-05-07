const validate = require('validate.js');

const signupConstraints = {
  firstName: {
    presence: true,
  },
  lastName: {
    presence: true,
  },
  email: {
    presence: true,
    email: true
  },
  username: {
    presence: true,
  },
  password: {
    presence: true,
    length: {
      minimum: 8,
      message: "Passowrd should be at least 8 characters"
    }
  },
}

const signinConstraints = {
  username: {
    presence: true,
  },
  password: {
    presence: true,
  },
}

validateSignup = (data) => {
  return validate(data, signupConstraints)
}

validateSignin = (data) => {
  return validate(data, signinConstraints)
}

module.exports = {
  validateSignup,
  validateSignin,
}
