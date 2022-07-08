import * as express from 'express';
import factory from '../../factory/routes';

const routes = express.Router();
const matchController = factory.matchLayers();

routes.get('/', matchController.get.bind(matchController));
routes.post('/', matchController.create.bind(matchController));

export default routes;
