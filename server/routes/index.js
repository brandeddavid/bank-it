const signupController = require('../controllers').signup;
const allUsers = require('../controllers/').allUsers;
const validateSignup = require('../middlewares/validators').signUp;

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
  })

  // Auth Routes
  app.post('/api/v1/auth/signup', validateSignup, signupController)

  // User Routes
  app.get('/api/v1/users', allUsers)
}
