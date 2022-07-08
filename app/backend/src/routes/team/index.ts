import * as express from 'express';
import factory from '../../factory/routes';

const routes = express.Router();
const teamController = factory.teamLayers();

routes.get('/', teamController.get.bind(teamController));

routes.get('/:id', teamController.getById.bind(teamController));

export default routes;
