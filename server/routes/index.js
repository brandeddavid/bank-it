const signupController = require('../controllers').signup
const validateSignup = require('../middlewares/validators').signUp

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
  })

  app.post('/api/v1/signup', validateSignup, signupController.create)
}
