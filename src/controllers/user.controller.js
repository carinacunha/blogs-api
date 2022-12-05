require('dotenv/config');
const loginService = require('../services/login.service');
const userService = require('../services/user.service');
const { encoder } = require('../auth/validateJWT');

const createUser = async (req, res) => {
    const { displayName, email, password, image } = req.body;
    
    const user = await loginService.findByEmail(email);
  
    if (user) {
      return res.status(409).json({ message: 'User already registered' });
    }

    if (!user) {
      const newUser = await userService.createUser({ displayName, email, password, image });
      const { id } = newUser.dataValues;
      req.user = newUser;
      const token = encoder({ id, email });
      return res.status(201).json({ token });
    }
};

const getUsers = async (_req, res) => {
    const users = await userService.getUsers();
      return res.status(200).json(users);
  };

const getUserById = async (req, res) => {
    const { id } = req.params;
    const user = await userService.getUserById(id);
    if (!user) {
      return res.status(404).json({ message: 'User does not exist' });
    }
    return res.status(200).json(user);
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
};