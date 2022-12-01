const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET || 'seusecretdetoken';

const jwtConfig = {
  expiresIn: '4min',
  algorithm: 'HS256',
};

const encoder = (user) => {
  const token = jwt.sign(user, secret, jwtConfig);
  return token;
};

const decoded = async (token) => {
  try {
    const payload = jwt.verify(token, secret);
    console.log(payload);
    return payload;
  } catch (err) {
    return { error: true };
  }
};

module.exports = {
  encoder,
  decoded,
};