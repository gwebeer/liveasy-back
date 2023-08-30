import { Router } from 'express';
import UserController from '../controller/userController.js';

const routes = Router();

routes.post('/user/validate-email', (req, res) => new  UserController().validateEmail(req, res));
routes.post('/user/auth', (req, res) => new  UserController().authenticateUser(req, res));
routes.post('/user/forgot-password', (req, res) => new  UserController().forgotPassword(req, res));
routes.put('/user/reset-password', (req, res) => new  UserController().resetPassword(req, res));

export default routes;