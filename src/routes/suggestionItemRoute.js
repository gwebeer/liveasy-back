import { Router } from 'express';
import SuggestionItemController from '../controller/suggestionItemController.js';

const routes = Router();

routes.post('/suggestion/item/create', (req, res) => new SuggestionItemController().createSuggestionItem(req, res));  
routes.get('/suggestion/item', (req, res) => new SuggestionItemController().getSuggestionItem(req, res));         
routes.put('/suggestion/item', (req, res) => new SuggestionItemController().updateSuggestionItem(req, res));      
routes.delete('/suggestion/item', (req, res) => new SuggestionItemController().deleteSuggestionItem(req, res));   

export default routes;