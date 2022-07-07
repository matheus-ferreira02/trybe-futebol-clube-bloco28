import { IRouter, Router } from 'express';
import LoginRoutes from './login';
import factory from '../factory/routes';

class Routes {
  public routes: IRouter;

  constructor(private login: LoginRoutes) {
    this.routes = Router();
  }

  public main() {
    this.routes.use('/login', this.login.main);
  }
}

const routes = new Routes(factory.loginRoutes());

export default routes;
