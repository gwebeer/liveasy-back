import { Router } from 'express';
import GiveUpPropertyController from '../controller/giveUpPropertyController.js';

const routes = Router();

routes.post('/user/property/give-up/add', (req, res) => new GiveUpPropertyController().createGiveUpProperty(req, res));
routes.get('/user/property/give-up/:id', (req, res) => new GiveUpPropertyController().getGiveUpProperty(req, res));
routes.put('/user/property/give-up/:id', (req, res) => new GiveUpPropertyController().updateGiveUpProperty(req, res));
routes.delete('/user/property/give-up/:id', (req, res) => new GiveUpPropertyController().deleteGiveUpProperty(req, res));

export default routes;