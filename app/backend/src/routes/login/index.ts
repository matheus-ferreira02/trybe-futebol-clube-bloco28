import * as express from 'express';
import factory from '../../factory/routes';

const routes = express.Router();
const loginController = factory.loginLayers();

routes.post('/', loginController.sigIn.bind(loginController));

export default routes;
