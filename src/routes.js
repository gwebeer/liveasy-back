const express = require('express');
const routes = express.Router();

const calendarItemController = require('./controller/calendarItemController');
const dashboardController = require('./controller/dashboardController');
const defaultListController = require('./controller/defaultListController');
const itemController = require('./controller/itemController');
const opinionAboutPlaceController = require('./controller/opinionAboutPlaceController');
const placeController = require('./controller/placeController');
const planningCostItemController = require('./controller/planningCostItemController');
const serviceController = require('./controller/serviceController');
const processController = require('./controller/processController');
const userController = require('./controller/userController');

// CalendarItem CRUD ---------------------------------------------
routes.post('/calendar/item/create', calendarItemController.createCalendarItem);      // *
routes.get('/calendar/item/:id', calendarItemController.getCalendarItem);             // *
routes.put('/calendar/item/:key/:value', calendarItemController.updateCalendarItem);  // ?
routes.delete('/calendar/item/:id', calendarItemController.deleteCalendarItem);       // *

// Dashboard CRUD ---------------------------------------------
routes.post('/dashboard/create', dashboardController.createDashboard);                // *
routes.get('/dashboard/:id', dashboardController.getDashboard);                       // *
routes.put('/dashboard/:key/:value', dashboardController.updateDashboard);            // ?
routes.delete('/dashboard/:id', dashboardController.deleteDashboard);                 // *

// Default List CRUD --------------------------------------------------
routes.post('/default-item/create', defaultListController.createItem);                // *
routes.get('/default-item/:id', defaultListController.getItem);                       // *
routes.put('/default-item/:key/:value', defaultListController.updateItem);            // ?
routes.delete('/default-item/:id', defaultListController.deleteItem);                 // *

// Item List CRUD --------------------------------------------------
routes.post('/item/create', itemController.createItem);                               // *
routes.get('/item/:id', itemController.getItem);                                      // *
routes.put('/item/:key/:value', itemController.updateItem);                           // ?
routes.delete('/item/:id', itemController.deleteItem);                                // *

// OpinionAboutPlace CRUD ---------------------------------------------
routes.post('/opinion_about_place/create', opinionAboutPlaceController.createOpinionAboutPlace);       // *
routes.get('/opinion_about_place/:id', opinionAboutPlaceController.getOpinionAboutPlace);              // *
routes.put('/opinion_about_place/:key/:value', opinionAboutPlaceController.updateOpinionAboutPlace);   // ?
routes.delete('/opinion_about_place/:id', opinionAboutPlaceController.deleteOpinionAboutPlace);        // *

// Place CRUD ---------------------------------------------
routes.post('/place/create', placeController.createPlace);                          // *
routes.get('/place/:id', placeController.getPlace);                                 // *
routes.put('/place/:key/:value', placeController.updatePlace);                      // ?
routes.delete('/place/:id', placeController.deletePlace);                           // *

// PlanningCostItem CRUD ---------------------------------------------
routes.post('/cost/create', planningCostItemController.createPlanningCostItem);     // *
routes.get('/cost/:id', planningCostItemController.getPlanningCostItem);            // *
routes.put('/cost/:key/:value', planningCostItemController.updatePlanningCostItem); // ?
routes.delete('/cost/:id', planningCostItemController.deletePlanningCostItem);      // *

// Service CRUD ---------------------------------------------
routes.post('/service/create', serviceController.createService);      // *
routes.get('/service/:id', serviceController.getService);             // *
routes.put('/service/:key/:value', serviceController.updateService);  // ?
routes.delete('/service/:id', serviceController.deleteService);       // *

// Process CRUD --------------------------------------------------
routes.post('/process/create', processController.createProcess);                    // *
routes.get('/process/:id', processController.getProcess);                           // *
routes.put('/process/:key/:value', processController.updateProcess);                // *
routes.delete('/process/:id', processController.deleteProcess);                     // *
routes.get('/process/user/:id', processController.getUserProcess);                  // *

// User CRUD --------------------------------------------------
routes.post('/register/create', userController.registerUser);                       // *
routes.get('/user/:id', userController.getUser);                                    // *
routes.put('/user/:key/:value', userController.updateUser);                         // *
routes.delete('/user/:id', userController.deleteUser);                              // *

// User Functions ---------------------------------------------
routes.get('/validate/:email', userController.validateEmail);                       // *
routes.get('/user/auth/:email/:password', userController.authenticateUser);         // *
routes.get('/user/forgot-password/:email', userController.forgotPassword);          // ?
routes.put('/user/reset-password/:key/:value' + userController.resetPassword);      // ?

module.exports = routes;