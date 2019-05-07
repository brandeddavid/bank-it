const validate = require('validate.js');

const signupConstraints = {
  firstName: {
    presence: true,
  },
  lastName: {
    presence: true,
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

validateSignup = (data) => {
  return validate(data, signupConstraints)
}

module.exports = {
  validateSignup,
}
