import { Router } from 'express';
import UserController from '../controller/userController.js';

const routes = Router();

routes.post('/user/register', (req, res) => new UserController().registerUser(req, res));  
routes.get('/user', (req, res) => new UserController().getUser(req, res));             
routes.put('/user', (req, res) => new UserController().updateUser(req, res));          
routes.delete('/user', (req, res) => new UserController().deleteUser(req, res));     

export default routes;