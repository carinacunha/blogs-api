const express = require('express');
const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');
const userValidation = require('./middlewares/userValidation');
const userController = require('./controllers/user.controller');
const tokenValidation = require('./middlewares/tokenValidation');
const categoryValidation = require('./middlewares/categoryValidation');
const categoryController = require('./controllers/category.controller');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginValidation.validation, loginController.getUserByEmail);
app.get('/user', tokenValidation.validation, userController.getUsers);
app.get('/user/:id', tokenValidation.validation, userController.getUserById);
app.post('/user', userValidation.validation, userController.createUser);
app.get('/categories', tokenValidation.validation, categoryController.getCategories);
app.post('/categories', 
  tokenValidation.validation,
  categoryValidation.validation, 
  categoryController.createCategory);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
