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
routes.post('/user/calendar/reminder/add', calendarReminderController.createCalendarReminder);    // *
routes.get('/user/calendar/reminder/:id', calendarReminderController.getCalendarReminder);        // *
routes.put('/user/calendar/reminder/:id', calendarReminderController.updateCalendarReminder);     // *
routes.delete('/user/calendar/reminder/:id', calendarReminderController.deleteCalendarReminder);  // *

// ChoosedProperty CRUD ---------------------------------------------
routes.post('/user/property/choosed/add', choosedPropertyController.createChoosedProperty);    // *
routes.get('/user/property/choosed/:id', choosedPropertyController.getChoosedProperty);        // *
routes.put('/user/property/choosed/:id', choosedPropertyController.updateChoosedProperty);     // *
routes.delete('/user/property/choosed/:id', choosedPropertyController.deleteChoosedProperty);  // *

// CustomItem CRUD --------------------------------------------------
routes.post('/user/property/item/add', customItemController.createCustomItem);     // *
routes.get('/user/property/item/:id', customItemController.getCustomItem);         // *
routes.put('/user/property/item/:id', customItemController.updateCustomItem);      // *
routes.delete('/user/property/item/:id', customItemController.deleteCustomItem);   // *

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

// PlanningCostItem CRUD --------------------------------------------
routes.post('/user/planning/cost/add', planningCostItemController.createPlanningCostItem);    // *
routes.get('/user/planning/cost/:id', planningCostItemController.getPlanningCostItem);        // *
routes.put('/user/planning/cost/:id', planningCostItemController.updatePlanningCostItem);     // *
routes.delete('/user/planning/cost/:id', planningCostItemController.deletePlanningCostItem);  // *

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
routes.get('/user/validate/:id', userController.validateEmail);           // *
routes.get('/user/auth/:id', userController.authenticateUser);            // *
routes.get('/user/forgot-password/:id', userController.forgotPassword);   // ?
routes.put('/user/reset-password/:id' + userController.resetPassword);    // ?

module.exports = routes;