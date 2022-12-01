const jwt = require('../auth/validateJWT');

const secret = process.env.JWT_SECRET;

const validation = async (req, res, next) => {
  const token = req.header('Authorization');
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }
  const response = await jwt.decoded(token, secret);
  if (response.error === true) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.user = response;
  return next();
};

module.exports = {
  validation,
};