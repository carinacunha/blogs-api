require('dotenv/config');
const loginService = require('../services/login.service');

const { encoder } = require('../auth/validateJWT');

const getUserByEmail = async (req, res) => {
    const { email } = req.body;
    const user = await loginService.findByEmail(email);
    if (user) {
      const { id } = user;
      const token = encoder({ id, email });
      return res.status(200).json({ token });
    }
    return res.status(400).json({ message: 'Invalid fields' });
};

module.exports = {
  getUserByEmail,
};