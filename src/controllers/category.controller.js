const categoryService = require('../services/category.service');

const createCategory = async (req, res) => {
  const { name } = req.body;
  const category = await categoryService.createCategory({ name });
    return res.status(201).json(category);
};

const getCategories = async (_req, res) => {
  const categories = await categoryService.getCategories();
    return res.status(200).json(categories);
};

module.exports = {
  createCategory,
  getCategories,
};