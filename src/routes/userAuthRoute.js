import { Router } from 'express';
import UserController from '../controller/userController.js';

const routes = Router();

routes.post('/user/validate-email/:email', (req, res) => new  UserController().validateEmail(req, res));     // ?
routes.post('/user/auth/:email/:password', (req, res) => new  UserController().authenticateUser(req, res));  // ?
routes.post('/user/forgot-password/:email', (req, res) => new  UserController().forgotPassword(req, res));   // ?
routes.put('/user/reset-password/:id', (req, res) => new  UserController().resetPassword(req, res));        // ?

export default routes;