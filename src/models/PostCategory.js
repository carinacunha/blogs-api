
module.exports = (sequelize, _DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', {
    postId: { 
      type: _DataTypes.INTEGER, 
      primaryKey: true 
    },
      
    categoryId: { 
      type: _DataTypes.INTEGER, 
      primaryKey: true 
    }
  },
  
    {
      timestamps: false,
      underscored: true, 
      tableName: 'posts_categories'
    },
  );

  PostCategory.associate = (models) => {
    models.Category.belongsToMany(models.BlogPost, {
      as: 'posts',
      through: PostCategory,
      foreignKey: 'categoryId', 
      otherKey: 'postId', 
    });
    models.BlogPost.belongsToMany(models.Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'postId', 
      otherKey: 'categoryId', 
    });
  };
    return PostCategory;
};