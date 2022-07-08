import * as express from 'express';
import factory from '../../factory/routes';
/* import authToken from '../../middlewares/authToken'; */

const routes = express.Router();
const teamController = factory.teamLayers();

routes.get('/', teamController.get.bind(teamController));

export default routes;
