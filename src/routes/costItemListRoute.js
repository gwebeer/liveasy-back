import { Router } from 'express';
import CostItemListController from '../controller/costItemListController.js';

const routes = Router();

routes.post('/user/list/cost/item/add', (req, res) => new CostItemListController().createCostItemList(req, res));    
routes.get('/user/list/cost/item/:process', (req, res) => new CostItemListController().getCostItemList(req, res));        
routes.put('/user/list/cost/item', (req, res) => new CostItemListController().updateCostItemList(req, res));     
routes.delete('/user/list/cost/item/:id', (req, res) => new CostItemListController().deleteCostItemList(req, res));  

export default routes;