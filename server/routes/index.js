const signupController = require('../controllers').signup

module.exports = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send({ status: 200, message: "Welcome to Bank It App" })
  })

  app.post('/api/v1/signup', signupController.create)
}
