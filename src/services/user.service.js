const { User, BlogPost } = require('../models');

const createUser = async ({ displayName, email, password, image }) => {
  const userCreated = await User.create({ displayName, email, password, image });
  return userCreated;
};

const getUsers = async () => {
  const allUsers = await User.findAll({ attributes: { exclude: 'password' } });
  return allUsers;
};

const getUserById = async (userId) => {
  const user = await User.findByPk(userId, { attributes: { exclude: 'password' } });
  return user;
};

const deleteUserById = async (id) => {
  await BlogPost.destroy({ where: { userId: id } });
  const userDeleted = await User.destroy({ where: { id } });
  return userDeleted;
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUserById,
};