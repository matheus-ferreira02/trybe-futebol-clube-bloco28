import LoginService from '../services/login';
import LoginController from '../controllers/login';
import TeamController from '../controllers/team';
import TeamService from '../services/team';

const loginLayers = () => {
  const service = new LoginService();
  const controller = new LoginController(service);

  return controller;
};

const teamLayers = () => {
  const service = new TeamService();
  const controller = new TeamController(service);

  return controller;
};

export default {
  loginLayers,
  teamLayers,
};
