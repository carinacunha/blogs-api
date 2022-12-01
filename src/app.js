const express = require('express');
const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');
const userValidation = require('./middlewares/userValidation');
const userController = require('./controllers/user.controller');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginValidation.validation, loginController.getUserByEmail);
app.post('/user', userValidation.validation, userController.createUser);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
