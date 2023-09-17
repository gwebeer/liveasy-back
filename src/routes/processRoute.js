import { Router } from 'express';
import ProcessController from '../controller/processController.js';

const routes = Router();

routes.post('/user/process/create', (req, res) => new ProcessController().createProcess(req, res));    
routes.get('/user/process/:id', (req, res) => new ProcessController().getProcess(req, res));           
routes.put('/user/process', (req, res) => new ProcessController().updateProcess(req, res));        
routes.delete('/user/process/:id', (req, res) => new ProcessController().deleteProcess(req, res));    

routes.get('/user/process/user/:user', (req, res) => new ProcessController().getUserProcess(req, res));   

export default routes;