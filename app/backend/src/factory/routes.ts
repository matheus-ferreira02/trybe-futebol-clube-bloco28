import LoginService from '../services/login';
import LoginController from '../controllers/login';

const loginLayers = () => {
  const service = new LoginService();
  const controller = new LoginController(service);

  return controller;
};

export default {
  loginLayers,
};
