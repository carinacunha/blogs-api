const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '7d',
  algorithm: 'HS256',
};

const encoder = (user) => {
  const token = jwt.sign({ data: { userId: user.id, email: user.email } }, secret, jwtConfig);
  return token;
};

const decoded = (token) => {
  try {
    const payload = jwt.verify(token, secret);
    return payload; 
  } catch (err) {
    return { error: true };
  }
};

module.exports = {
  encoder,
  decoded,
};