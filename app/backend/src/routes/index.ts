import * as express from 'express';
import loginRoutes from './login';
import teamRoutes from './team';

const routes = express.Router();

routes.use('/login', loginRoutes);
routes.use('/teams', teamRoutes);

export default routes;
