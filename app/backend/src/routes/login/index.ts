import * as express from 'express';
import factory from '../../factory/routes';
import validateLogin from '../../middlewares/validateLogin';

const routes = express.Router();
const loginController = factory.loginLayers();

routes.post('/', validateLogin, loginController.sigIn.bind(loginController));

export default routes;
