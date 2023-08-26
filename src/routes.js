const express = require('express');
const routes = express.Router();

const calendarReminderController = require('./controller/calendarReminderController');
const choosedPropertyController = require('./controller/choosedPropertyController');
const costItemListController = require('./controller/costItemListController');
const giveUpPropertyController = require('./controller/giveUpPropertyController');
const idealPropertyController = require('./controller/idealPropertyController');
const itemListController = require('./controller/itemListController');
const processController = require('./controller/processController');
const propertyController = require('./controller/propertyController');
const propertyItemController = require('./controller/propertyItemController');
const suggestionItemController = require('./controller/suggestionItemController');
const userController = require('./controller/userController');

// todo const dashboard = require('./functions/dashboard.js') 

// CalendarReminder CRUD --------------------------------------------
routes.post('/user/calendar/reminder/add', calendarReminderController.createCalendarReminder);    // *
routes.get('/user/calendar/reminder/:id', calendarReminderController.getCalendarReminder);        // *
routes.put('/user/calendar/reminder/:id', calendarReminderController.updateCalendarReminder);     // *
routes.delete('/user/calendar/reminder/:id', calendarReminderController.deleteCalendarReminder);  // *

// ChoosedProperty CRUD ---------------------------------------------
routes.post('/user/property/choosed/add', choosedPropertyController.createChoosedProperty);    // *
routes.get('/user/property/choosed/:id', choosedPropertyController.getChoosedProperty);        // *
routes.put('/user/property/choosed/:id', choosedPropertyController.updateChoosedProperty);     // *
routes.delete('/user/property/choosed/:id', choosedPropertyController.deleteChoosedProperty);  // *

// ItemList CRUD --------------------------------------------------
routes.post('/user/list/item/add', itemListController.createItemList);     // *
routes.get('/user/list/item/:id', itemListController.getItemList);         // *
routes.put('/user/list/item/:id', itemListController.updateItemList);      // *
routes.delete('/user/list/item/:id', itemListController.deleteItemList);   // *

// GiveUpProperty CRUD ----------------------------------------------
routes.post('/user/property/give-up/add', giveUpPropertyController.createGiveUpProperty);    // *
routes.get('/user/property/give-up/:id', giveUpPropertyController.getGiveUpProperty);        // *
routes.put('/user/property/give-up/:id', giveUpPropertyController.updateGiveUpProperty);     // *
routes.delete('/user/property/give-up/:id', giveUpPropertyController.deleteGiveUpProperty);  // *

// IdealProperty CRUD -----------------------------------------------
routes.post('/user/property/add', idealPropertyController.createIdealProperty);    // *
routes.get('/user/property/:id', idealPropertyController.getIdealProperty);        // *
routes.put('/user/property/:id', idealPropertyController.updateIdealProperty);     // *
routes.delete('/user/property/:id', idealPropertyController.deleteIdealProperty);  // *

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
routes.post('/user/validate-email/:email', userController.validateEmail);        // ?
routes.post('/user/auth/:email/:password', userController.authenticateUser);     // ?
routes.post('/user/forgot-password/:email', userController.forgotPassword);      // ?
routes.put('/user/reset-password/:id' + userController.resetPassword);          // ?

module.exports = routes;