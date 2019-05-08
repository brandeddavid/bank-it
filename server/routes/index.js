const signupController = require('../controllers').signup;
const signinController = require('../controllers').login;
const allUsers = require('../controllers/').allUsers;
const validators = require('../middlewares/validators');
const authentication = require('../middlewares/authentication')

module.exports = (app) => {
  
  app.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
  })

  // Auth Routes
  app.post('/api/v1/auth/signup', validators.signUp, authentication.generateToken, signupController)
  app.post('/api/v1/auth/signin', validators.signIn, authentication.generateToken, signinController)

  // User Routes
  app.use(authentication.verifyToken)
  app.get('/api/v1/users', allUsers)

  app.get('*', (req, res) => {
    res.status(200).send({ status: 200, message: "Route does not exist. Check documentation" })
  })
}
