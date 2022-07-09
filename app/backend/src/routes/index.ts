import * as express from 'express';
import loginRoutes from './login';
import teamRoutes from './team';
import matchRoutes from './match';
import leaderboardRoutes from './leaderboard';

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/teams', teamRoutes);
routes.use('/matches', matchRoutes);
routes.use('/leaderboard', leaderboardRoutes);

export default routes;
