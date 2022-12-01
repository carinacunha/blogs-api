const { User } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  User.create({ displayName, email, password, image });
};

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
  return allUsers;
};
module.exports = {
  createUser,
  getUsers,
};