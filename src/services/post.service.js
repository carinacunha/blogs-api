const { BlogPost, PostCategory, Category, User } = require('../models');

const createPost = async ({ userId, title, content, categoryIds }) => {
  const post = await BlogPost.create({ title, content, userId });
  
  await Promise.all(categoryIds
    .map((cat) => PostCategory.create({ postId: post.id, categoryId: cat })));
  return post;
};

const getPosts = async () => {
  const posts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return posts;
};

const getPostById = async (postId) => {
  const post = await BlogPost.findByPk(postId, {
    include: [
      { model: User, as: 'user', attributes: { exclude: 'password' } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ],
  });
  return post;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
};