import * as express from 'express';
import IRequestUser from '../../protocols/IRequestUser';
import factory from '../../factory/routes';
import validateLogin from '../../middlewares/validateLogin';
import authToken from '../../middlewares/authToken';

const routes = express.Router();
const loginController = factory.loginLayers();

routes.post('/', validateLogin, loginController.sigIn.bind(loginController));

routes.get('/validate', authToken, (req: IRequestUser, res: express.Response) => {
  if (req.user) {
    const { role } = req.user;

    return res.status(200).json({ role });
  }
});

export default routes;
