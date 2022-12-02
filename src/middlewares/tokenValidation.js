const jwt = require('../auth/validateJWT');

const secret = process.env.JWT_SECRET;

const validation = (req, res, next) => {
  const token = req.headers.authorization;
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found' });
  }

  const payload = jwt.decoded(token, secret);
  if (payload.error === true) {
    return res.status(401).json({ message: 'Expired or invalid token' });
  }
  req.payload = payload;
  
  next();
};

module.exports = {
  validation,
};