const express = require('express');
const routes = express.Router();

const calendarReminderController = require('./controller/calendarReminderController');
const choosedPropertyController = require('./controller/choosedPropertyController');
const itemListController = require('./controller/itemListController');
const giveUpPropertyController = require('./controller/giveUpPropertyController');
const idealPropertyController = require('./controller/idealPropertyController');
const costItemListController = require('./controller/costItemListController');
const processController = require('./controller/processController');
const propertyController = require('./controller/propertyController');
const propertyItemController = require('./controller/propertyItemController');
const suggestionItemController = require('./controller/suggestionItemController');
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

// ItemList CRUD --------------------------------------------------
routes.post('/user/list/item/add', itemListController.createItemList);     // todo category
routes.get('/user/list/item/:id', itemListController.getItemList);         // todo category
routes.put('/user/list/item/:id', itemListController.updateItemList);      // todo category
routes.delete('/user/list/item/:id', itemListController.deleteItemList);   // todo category


// Default List CRUD --------------------------------------------------
routes.post('/default-item/create', defaultListController.createItem)
routes.delete('/default-item/:id', defaultListController.deleteItem)
routes.put('/default-item/:id', defaultListController.updateItem)
routes.get('/default-item/:id', defaultListController.getItem)

// CostItemList CRUD --------------------------------------------
routes.post('/user/list/cost/item/add', costItemListController.createCostItemList);    // *
routes.get('/user/list/cost/item/:id', costItemListController.getCostItemList);        // *
routes.put('/user/list/cost/item/:id', costItemListController.updateCostItemList);     // *
routes.delete('/user/list/cost/item/:id', costItemListController.deleteCostItemList);  // *

// Process CRUD -----------------------------------------------------
routes.post('/user/process/create', processController.createProcess);    // *
routes.get('/user/process/:id', processController.getProcess);           // *
routes.put('/user/process/:id', processController.updateProcess);        // *
routes.delete('/user/process/:id', processController.deleteProcess);     // *

// Process Functions ------------------------------------------------
routes.get('/user/process/user/:id', processController.getUserProcess);    // *

// Property CRUD ----------------------------------------------------
routes.post('/property/add', propertyController.createProperty);    // *
routes.get('/property/:id', propertyController.getProperty);        // *
routes.put('/property/:id', propertyController.updateProperty);     // *
routes.delete('/property/:id', propertyController.deleteProperty);  // *

// PropertyItem CRUD ------------------------------------------------
routes.post('/property/item/add', propertyItemController.createPropertyItem);     // *
routes.get('/property/item/:id', propertyItemController.getPropertyItem);         // *
routes.put('/property/item/:id', propertyItemController.updatePropertyItem);      // *
routes.delete('/property/item/:id', propertyItemController.deletePropertyItem);   // *

// SuggestionItem CRUD ----------------------------------------------
routes.post('/suggestion/item/create', suggestionItemController.createSuggestionItem);  // * 
routes.get('/suggestion/item/:id', suggestionItemController.getSuggestionItem);         // *
routes.put('/suggestion/item/:id', suggestionItemController.updateSuggestionItem);      // *
routes.delete('/suggestion/item/:id', suggestionItemController.deleteSuggestionItem);   // *

// User CRUD --------------------------------------------------------
routes.post('/user/register', userController.registerUser);  // *
routes.get('/user/:id', userController.getUser);             // *
routes.put('/user/:id', userController.updateUser);          // *
routes.delete('/user/:id', userController.deleteUser);       // *

// User Functions ---------------------------------------------------
routes.get('/user/validate-email/:id', userController.validateEmail);     // *
routes.get('/user/auth/:id', userController.authenticateUser);            // *
routes.get('/user/forgot-password/:id', userController.forgotPassword);   // ?
routes.put('/user/reset-password/:id' + userController.resetPassword);    // ?

module.exports = routes;