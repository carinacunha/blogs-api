
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { type: _DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    categoryId: { type: _DataTypes.INTEGER, primaryKey: true }
  },
    {
      timestamps: false,
      underscored: true, 
      tableName: 'post_categories'
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId', 
      otherKey: 'postId', 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogs',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
  };
    return PostCategory;
};