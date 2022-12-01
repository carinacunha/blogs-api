const { Category } = require('../models');

const createCategory = async ({ name }) => {
    const category = await Category.create({ name });
    return category;
};

const getCategories = async () => {
  const allUsers = await Category.findAll();
  return allUsers;
};

module.exports = {
  createCategory,
  getCategories,
};
