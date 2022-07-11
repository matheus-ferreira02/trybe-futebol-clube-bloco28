import * as express from 'express';
import factory from '../../factory/routes';

const routes = express.Router();
const leaderBoardController = factory.leaderboardLayers();

routes.get('/home', leaderBoardController.getHomeMatch.bind(leaderBoardController));
routes.get('/away', leaderBoardController.getAwayMatch.bind(leaderBoardController));
routes.get('/', leaderBoardController.getAllMatches.bind(leaderBoardController));

export default routes;
