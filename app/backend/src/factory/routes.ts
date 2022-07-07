import LoginService from '../services/login';
import LoginController from '../controllers/login';
import LoginRoutes from '../routes/login';

const loginRoutes = () => {
  const service = new LoginService();
  const controller = new LoginController(service);
  const routes = new LoginRoutes(controller);

  return routes;
};

export default {
  loginRoutes,
};
