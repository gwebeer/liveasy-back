const express = require('express');
const routes = express.Router();

const calendarReminderController = require('./controller/calendarReminderController');
const choosedPropertyController = require('./controller/choosedPropertyController');
const customItemController = require('./controller/customItemController');
const giveUpPropertyController = require('./controller/giveUpPropertyController');
const idealPropertyController = require('./controller/idealPropertyController');
const planningCostItemController = require('./controller/planningCostItemController');
const processController = require('./controller/processController');
const propertyController = require('./controller/propertyController');
const propertyItemController = require('./controller/propertyItemController');
const suggestionItemController = require('./controller/suggestionItemController');
const userController = require('./controller/userController');

// todo const dashboard = require('./functions/dashboard.js') 

// CalendarReminder CRUD --------------------------------------------
routes.post('/user/calendar/reminder/add', calendarReminderController.createCalendarReminder);    // todo
routes.get('/user/calendar/reminder/:id', calendarReminderController.getCalendarReminder);        // todo
routes.put('/user/calendar/reminder/:id', calendarReminderController.updateCalendarReminder);     // todo
routes.delete('/user/calendar/reminder/:id', calendarReminderController.deleteCalendarReminder);  // todo

// ChoosedProperty CRUD ---------------------------------------------
routes.post('/user/property/choosed/add', choosedPropertyController.createChoosedProperty);    // todo
routes.get('/user/property/choosed/:id', choosedPropertyController.getChoosedProperty);        // todo
routes.put('/user/property/choosed/:id', choosedPropertyController.updateChoosedProperty);     // todo
routes.delete('/user/property/choosed/:id', choosedPropertyController.deleteChoosedProperty);  // todo

// CustomItem CRUD --------------------------------------------------
routes.post('/user/property/item/add', customItemController.createCustomItem);     // todo
routes.get('/user/property/item/:id', customItemController.getCustomItem);         // todo
routes.put('/user/property/item/:id', customItemController.updateCustomItem);      // todo
routes.delete('/user/property/item/:id', customItemController.deleteCustomItem);   // todo

// GiveUpProperty CRUD ----------------------------------------------
routes.post('/user/property/give-up/add', giveUpPropertyController.createGiveUpProperty);    // todo
routes.get('/user/property/give-up/:id', giveUpPropertyController.getGiveUpProperty);        // todo
routes.put('/user/property/give-up/:id', giveUpPropertyController.updateGiveUpProperty);     // todo
routes.delete('/user/property/give-up/:id', giveUpPropertyController.deleteGiveUpProperty);  // todo

// IdealProperty CRUD -----------------------------------------------
routes.post('/user/property/add', idealPropertyController.createIdealProperty);    // todo
routes.get('/user/property/:id', idealPropertyController.getIdealProperty);        // todo
routes.put('/user/property/:id', idealPropertyController.updateIdealProperty);     // todo
routes.delete('/user/property/:id', idealPropertyController.deleteIdealProperty);  // todo

// PlanningCostItem CRUD --------------------------------------------
routes.post('/user/planning/cost/add', planningCostItemController.createPlanningCostItem);     // todo
routes.get('/user/planning/cost/:id', planningCostItemController.getPlanningCostItem);            // todo
routes.put('/user/planning/cost/:key/:value', planningCostItemController.updatePlanningCostItem); // todo
routes.delete('/user/planning/cost/:id', planningCostItemController.deletePlanningCostItem);      // todo

// Process CRUD -----------------------------------------------------
routes.post('/user/process/create', processController.createProcess);    // todo
routes.get('/user/process/:id', processController.getProcess);           // todo
routes.put('/user/process/:id', processController.updateProcess);        // todo
routes.delete('/user/process/:id', processController.deleteProcess);     // todo

// Process Functions ------------------------------------------------
routes.get('/user/process/:user_id', processController.getUserProcess);    // todo

// PropertyItem CRUD ------------------------------------------------
routes.post('/property/item/add', propertyItemController.createPropertyItem);     // todo
routes.get('/property/item/:id', propertyItemController.getPropertyItem);         // todo
routes.put('/property/item/:id', propertyItemController.updatePropertyItem);      // todo
routes.delete('/property/item/:id', propertyItemController.deletePropertyItem);   // todo

// Property CRUD ----------------------------------------------------
routes.post('/property/add', propertyController.createProperty);    // todo
routes.get('/property/:id', propertyController.getProperty);        // todo
routes.put('/property/:id', propertyController.updateProperty);     // todo
routes.delete('/property/:id', propertyController.deleteProperty);  // todo

// SuggestionItem CRUD ----------------------------------------------
routes.post('/suggestion/item/create', suggestionItemController.createItem);  // todo
routes.get('/suggestion/item/:id', suggestionItemController.getItem);         // todo
routes.put('/suggestion/item/:id', suggestionItemController.updateItem);      // todo
routes.delete('/suggestion/item/:id', suggestionItemController.deleteItem);   // todo

// User CRUD --------------------------------------------------------
routes.post('/user/register', userController.registerUser);  // todo
routes.get('/user/:id', userController.getUser);             // todo
routes.put('/user/:id', userController.updateUser);          // todo
routes.delete('/user/:id', userController.deleteUser);       // todo

// User Functions ---------------------------------------------------
routes.get('/user/validate/:id', userController.validateEmail);              // todo
routes.get('/user/auth/:id', userController.authenticateUser);               // todo
routes.get('/user/forgot-password/:email', userController.forgotPassword);   // todo
routes.put('/user/reset-password/:id' + userController.resetPassword);       // todo

module.exports = routes;