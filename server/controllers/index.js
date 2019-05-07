const signup = require('./auth/signupController').create;
const allUsers = require('./users/userController').allUsers;


module.exports = {
  signup,
  allUsers,
}