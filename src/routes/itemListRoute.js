import { Router } from 'express';
import ItemListController from '../controller/itemListController.js';

const routes = Router();

routes.post('/user/list/item/add', (req, res) => new ItemListController().createItemList(req, res));     
routes.get('/user/list/item/:id', (req, res) => new ItemListController().getItemList(req, res));         
routes.put('/user/list/item/:id', (req, res) => new ItemListController().updateItemList(req, res));      
routes.delete('/user/list/item/:id', (req, res) => new ItemListController().deleteItemList(req, res));   

export default routes;