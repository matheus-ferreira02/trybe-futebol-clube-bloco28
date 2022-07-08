import { Request, Response } from 'express';
import TeamService from '../services/team';

export default class TeamController {
  constructor(private service: TeamService) {}

  public async get(req: Request, res: Response) {
    const teams = await this.service.get();

    return res.status(200).json(teams);
  }

  public async getById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this.service.getById(Number(id));

    return res.status(200).json(team);
  }
}
