import { Router } from 'express';
import PropertyItemController from '../controller/propertyItemController.js';

const routes = Router();

routes.post('/property/item/add', (req, res) => new PropertyItemController().createPropertyItem(req, res));     
routes.get('/property/item/:id', (req, res) => new PropertyItemController().getPropertyItem(req, res));         
routes.put('/property/item/:id', (req, res) => new PropertyItemController().updatePropertyItem(req, res));      
routes.delete('/property/item/:id', (req, res) => new PropertyItemController().deletePropertyItem(req, res));   

export default routes;