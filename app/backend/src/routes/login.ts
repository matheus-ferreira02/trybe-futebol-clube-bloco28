import { IRouter, Router } from 'express';
import LoginController from '../controllers/login';

export default class LoginRoutes {
  public routes: IRouter;

  constructor(private controller: LoginController) {
    this.routes = Router();
  }

  public main() {
    this.routes.post('/', this.controller.sigIn);
  }
}
