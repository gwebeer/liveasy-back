import { Router } from 'express';
import IdealPropertyController from '../controller/idealPropertyController.js';

const routes = Router();

routes.post('/user/property/add', (req, res) => new IdealPropertyController().createIdealProperty(req, res));    
routes.get('/user/property/:user', (req, res) => new IdealPropertyController().getIdealProperty(req, res));        
routes.put('/user/property', (req, res) => new IdealPropertyController().updateIdealProperty(req, res));     
routes.delete('/user/property/:id', (req, res) => new IdealPropertyController().deleteIdealProperty(req, res));  

export default routes;