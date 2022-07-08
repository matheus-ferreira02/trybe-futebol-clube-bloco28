import * as express from 'express';
import loginRoutes from './login';
import teamRoutes from './team';
import matchRoutes from './match';

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/teams', teamRoutes);
routes.use('/matches', matchRoutes);

export default routes;
