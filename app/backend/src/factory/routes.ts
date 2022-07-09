import LeaderBoardService from '../services/leaderboard';
import LeaderBoardController from '../controllers/leaderboard';
import LoginService from '../services/login';
import LoginController from '../controllers/login';
import TeamController from '../controllers/team';
import TeamService from '../services/team';
import MatchService from '../services/match';
import MatchController from '../controllers/match';

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

const matchLayers = () => {
  const service = new MatchService();
  const controller = new MatchController(service);

  return controller;
};

const leaderboardLayers = () => {
  const service = new LeaderBoardService();
  const controller = new LeaderBoardController(service);

  return controller;
};

export default {
  loginLayers,
  teamLayers,
  matchLayers,
  leaderboardLayers,
};
