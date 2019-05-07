const signupController = require('../controllers').signup;
const signinController = require('../controllers').login;
const allUsers = require('../controllers/').allUsers;
const validateSignup = require('../middlewares/validators').signUp;
const validateSignin = require('../middlewares/validators').signIn;

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
  })

  // Auth Routes
  app.post('/api/v1/auth/signup', validateSignup, signupController)
  app.post('/api/v1/auth/signin', validateSignin, signinController)

  // User Routes
  app.get('/api/v1/users', allUsers)
}
