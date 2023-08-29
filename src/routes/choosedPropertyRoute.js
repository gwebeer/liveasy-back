import { Router } from 'express';
import ChoosedPropertyController from '../controller/choosedPropertyController.js';

const routes = Router();

routes.post('/user/property/choosed/add', (req, res) => new ChoosedPropertyController().createChoosedProperty(req, res));    
routes.get('/user/property/choosed', (req, res) => new ChoosedPropertyController().getChoosedProperty(req, res));        
routes.put('/user/property/choosed', (req, res) => new ChoosedPropertyController().updateChoosedProperty(req, res));     
routes.delete('/user/property/choosed', (req, res) => new ChoosedPropertyController().deleteChoosedProperty(req, res));  

export default routes;