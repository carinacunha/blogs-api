const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const encoder = (user) => {
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

const decoder = (authorization) => {
  const payload = jwt.verify(authorization, secret);
    return payload;
};

module.exports = {
  encoder,
  decoder,
};