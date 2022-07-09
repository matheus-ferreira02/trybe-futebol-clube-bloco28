import * as express from 'express';
import factory from '../../factory/routes';
import authToken from '../../middlewares/authToken';

const routes = express.Router();
const matchController = factory.matchLayers();

routes.get('/', matchController.get.bind(matchController));
routes.post('/', authToken, matchController.create.bind(matchController));
routes.patch('/:id/finish', matchController.finish.bind(matchController));
routes.patch('/:id', matchController.update.bind(matchController));

export default routes;
