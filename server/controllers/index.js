const signup = require('./auth/signupController').create;
const allUsers = require('./users/userController').allUsers;
const login = require('./auth/signinController').login;


module.exports = {
  signup,
  allUsers,
  login,
}