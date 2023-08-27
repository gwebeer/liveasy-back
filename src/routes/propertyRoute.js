import { Router } from 'express';
import PropertyController from '../controller/propertyController.js';

const routes = Router();

routes.post('/property/add', (req, res) => new PropertyController().createProperty(req, res));    
routes.get('/property/:id', (req, res) => new PropertyController().getProperty(req, res));        
routes.put('/property/:id', (req, res) => new PropertyController().updateProperty(req, res));     
routes.delete('/property/:id', (req, res) => new PropertyController().deleteProperty(req, res));  

export default routes;