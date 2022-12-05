const express = require('express');

const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');
const userValidation = require('./middlewares/userValidation');
const userController = require('./controllers/user.controller');
const tokenValidation = require('./middlewares/tokenValidation');
const categoryValidation = require('./middlewares/categoryValidation');
const categoryController = require('./controllers/category.controller');
const postController = require('./controllers/post.controller');
const postValidation = require('./middlewares/postValidation');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginValidation.validation, loginController.getUserByEmail);
app.get('/user', tokenValidation.validation, userController.getUsers);
app.get('/user/:id', tokenValidation.validation, userController.getUserById);
app.post('/user', userValidation.validation, userController.createUser);
app.delete('/user/me', tokenValidation.validation, userController.deleteUser);

app.get('/categories', tokenValidation.validation, categoryController.getCategories);
app.post('/categories', tokenValidation.validation,
  categoryValidation.validation, categoryController.createCategory);

app.get('/post/search', tokenValidation.validation, postController.getPostByQuery);
app.get('/post', tokenValidation.validation, postController.getPosts);
app.get('/post/:id', tokenValidation.validation, postController.getPostById);
app.post('/post', tokenValidation.validation,
postValidation.validation, postController.createPost);
app.put('/post/:id', tokenValidation.validation, postController.updatePost);
app.delete('/post/:id', tokenValidation.validation, postController.deletePost);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
