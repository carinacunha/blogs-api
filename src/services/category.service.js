const { Category } = require('../models');

const createCategory = async ({ name }) => {
  const category = await Category.create({ name });
  return category;
};

const getCategories = async () => {
  const allCatergories = await Category.findAll();
  return allCatergories;
};

const getCategoryById = async (id) => {
  const category = await Category.findByPk(id);
  return category;
};

module.exports = {
  createCategory,
  getCategories,
  getCategoryById,
};
