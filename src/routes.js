const express = require('express');
const routes = express.Router();

const userController = require('./controller/userController');
const processController = require('./controller/processController');
const defaultListController = require('./controller/defaultListController');
const personalListController = require('./controller/personalListController');

// User CRUD --------------------------------------------------
routes.post('/user/create', userController.postUser)
routes.delete('/user/:id', userController.deleteUser)
routes.put('/user/:key/:value', userController.updateUser)
routes.get('/user/:id', userController.getUser)

// Verifica se o e-mail do usuário já está registrado
routes.get('/auth/email/:email', userController.validEmail)
// Registra um novo usuário
routes.post('/register/create', userController.registerUser)
// Autenticação do usuário
routes.get('/user/auth/:email/:password', userController.auth)
// Envio de Redefinição de Senha
routes.get('/user/forgotPassword/:email', userController.sentEmail)
// // Criação de nova senha
// routes.put('/user/reset-password/:email' + userController.resetPassword)

// Process CRUD --------------------------------------------------
routes.post('/process/create', processController.createProcess)
routes.delete('/process/:id', processController.deleteProcess)
routes.put('/process/:key/:value', processController.updateProcess)
routes.get('/process/:id', processController.getProcess)
routes.get('/process/user/:id', processController.getUserProcess)



// Default List CRUD --------------------------------------------------
routes.post('/default-item/create', defaultListController.createItem)
routes.delete('/default-item/:id', defaultListController.deleteItem)
routes.put('/default-item/:id', defaultListController.updateItem)
routes.get('/default-item/:id', defaultListController.getItem)

// Personal List CRUD --------------------------------------------------
routes.post('/list/create', personalListController.createItem)
routes.delete('/list/:id', personalListController.deleteItem)
routes.put('/list/:id', personalListController.updateItem)
routes.get('/list/:id', personalListController.getItem)


module.exports = routes;