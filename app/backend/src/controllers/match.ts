import { Request, Response } from 'express';
import MatchService from '../services/match';

export default class MatchController {
  constructor(private service: MatchService) {}

  public async get(req: Request, res: Response) {
    const matches = await this.service.get();

    return res.status(200).json(matches);
  }
}
