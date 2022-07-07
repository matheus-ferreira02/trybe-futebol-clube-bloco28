import { Request, Response } from 'express';
import LoginService from '../services/login';

export default class LoginController {
  constructor(private service: LoginService) {}

  public async sigIn(req: Request, res: Response) {
    const { email, password } = req.body;

    const token = await this.service.sigIn(email, password);

    return res.status(200).json({ token });
  }
}
