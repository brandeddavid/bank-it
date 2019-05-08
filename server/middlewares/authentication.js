const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config()

const secretKey = process.env.SECRET_KEY

const generateToken = (req, res, next) => {
  const token = jwt.sign({ username: req.body.username }, secretKey, { expiresIn: '24h' })
  res.setHeader('Authorization', `Bearer ${token}`)

  return next()
}

const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];

  if (!token) {
    return res.status(401).send({ message: "No token provided. Kindly log in", status: 401 })
  } else {
    token = token.substring(7);
    
    jwt.verify(token, secretKey, (error, decoded) => {
      if(error) {
        return res.status(401).send({ message: "Invalid token provided", status: 401, error })
      } else {
        res.locals.currentUser = decoded;

        return next()
      }
    })
  }
}

module.exports = {
  generateToken,
  verifyToken,
}
