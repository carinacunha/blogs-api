const express = require('express');
const loginController = require('./controllers/login.controller');
const loginValidation = require('./middlewares/loginValidation');

// ...

const app = express();

app.use(express.json());

app.post('/login', loginValidation.validation, loginController.getUserByEmail);

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
