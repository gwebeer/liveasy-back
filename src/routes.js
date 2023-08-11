const express = require('express');
const routes = express.Router();

const calendarController = require('./controller/calendarController');
const dashboardController = require('./controller/dashboardController');
const defaultListController = require('./controller/defaultListController');
const itemListController = require('./controller/itemListController');
const opinionAboutPlaceController = require('./controller/opinionAboutPlaceController');
const placeController = require('./controller/placeController');
const planningCostController = require('./controller/planningCostController');
const serviceController = require('./controller/serviceController');
const processController = require('./controller/processController');
const userController = require('./controller/userController');

// Calendar CRUD ---------------------------------------------
routes.post('/calendar/create', calendarController.createCalendar)
routes.get('/calendar/:id', calendarController.getCalendar)
routes.get('/calendars', calendarController.getCalendars)
routes.put('/calendar/:id', calendarController.updateCalendar)
routes.delete('/calendar/:id', calendarController.deleteCalendar)

// Dashboard CRUD ---------------------------------------------
routes.post('/dashboard/create', dashboardController.createDashboard)
routes.get('/dashboard/:id', dashboardController.getDashboard)
routes.get('/dashboards', dashboardController.getDashboards)
routes.put('/dashboard/:id', dashboardController.updateDashboard)
routes.delete('/dashboard/:id', dashboardController.deleteDashboard)

// Default List CRUD --------------------------------------------------
routes.post('/default-item/create', defaultListController.createItem)
routes.get('/default-item/:id', defaultListController.getItem)
routes.get('/default-items/:id', defaultListController.getItems)
routes.put('/default-item/:id', defaultListController.updateItem)
routes.delete('/default-item/:id', defaultListController.deleteItem)

// Item List CRUD --------------------------------------------------
routes.post('/item/create', itemListController.createItem)
routes.get('/item/:id', itemListController.getItem)
routes.get('/items', itemListController.getItems)
routes.put('/item/:id', itemListController.updateItem)
routes.delete('/item/:id', itemListController.deleteItem)

// OpinionAboutPlace CRUD ---------------------------------------------
routes.post('/place/opinion/create', opinionAboutPlaceController.createOpinionAboutPlace)
routes.get('/place/opinion/:id', opinionAboutPlaceController.getOpinionAboutPlace)
routes.get('/place/opinions', opinionAboutPlaceController.getOpinionAboutPlaces)
routes.put('/place/opinion/:id', opinionAboutPlaceController.updateOpinionAboutPlace)
routes.delete('/place/opinion/:id', opinionAboutPlaceController.deleteOpinionAboutPlace)

// Place CRUD ---------------------------------------------
routes.post('/place/create', placeController.createPlace)
routes.get('/place/:id', placeController.getPlace)
routes.get('/place/:id', placeController.getPlaces)
routes.put('/place/:id', placeController.updatePlace)
routes.delete('/place/:id', placeController.deletePlace)

// PlanningCost CRUD ---------------------------------------------
routes.post('/cost/create', planningCostController.createPlanningCost)
routes.get('/cost/:id', planningCostController.getPlanningCost)
routes.get('/costs', planningCostController.getPlanningCosts)
routes.put('/cost/:id', planningCostController.updatePlanningCost)
routes.delete('/cost/:id', planningCostController.deletePlanningCost)

// Service CRUD ---------------------------------------------
routes.post('/service/create', serviceController.createService)
routes.get('/service/:id', serviceController.getService)
routes.get('/services', serviceController.getServices)
routes.put('/service/:id', serviceController.updateService)
routes.delete('/service/:id', serviceController.deleteService)

// Process CRUD --------------------------------------------------
routes.post('/process/create', processController.createProcess)
routes.get('/process/:id', processController.getProcess)
routes.get('/process/user/:id', processController.getUserProcess)
routes.put('/process/:key/:value', processController.updateProcess)
routes.delete('/process/:id', processController.deleteProcess)

// User CRUD --------------------------------------------------
routes.post('/user/create', userController.createUser)
routes.get('/user/:id', userController.getUser)
routes.get('/users', userController.getUsers)
routes.put('/user/:key/:value', userController.updateUser)
routes.delete('/user/:id', userController.deleteUser)

// User Functions ---------------------------------------------
routes.get('/auth/email/:email', userController.validateEmail)
routes.post('/register/create', userController.registerUser)
routes.get('/user/auth/:email/:password', userController.authenticateUser)
// todo Envio de Redefinição de Senha
routes.get('/user/forgotPassword/:email', userController.forgotPassword)
// todo // Criação de nova senha
// todo routes.put('/user/reset-password/:email' + userController.resetPassword)

module.exports = routes;