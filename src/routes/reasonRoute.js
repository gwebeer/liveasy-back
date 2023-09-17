import { Router } from 'express';
import ReasonController from '../controller/reasonController.js';

const routes = Router();

routes.post('/user/property/reason/add', (req, res) => new ReasonController().createReason(req, res));    
routes.get('/user/property/reason/:id', (req, res) => new ReasonController().getReason(req, res));        
routes.put('/user/property/reason', (req, res) => new ReasonController().updateReason(req, res));     
routes.delete('/user/property/reason/:id', (req, res) => new ReasonController().deleteReason(req, res));  

export default routes;