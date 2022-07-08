import { Request, Response } from 'express';
import MatchService from '../services/match';

export default class MatchController {
  constructor(private service: MatchService) {}

  public async get(req: Request, res: Response) {
    const matches = await this.service.get();

    return res.status(200).json(matches);
  }

  public async create(req: Request, res: Response) {
    const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

    const createdMatch = await this.service
      .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });

    return res.status(201).json(createdMatch);
  }

  public async finish(req: Request, res: Response) {
    const { id } = req.params;

    await this.service.finish(Number(id));

    return res.status(201).json({ message: 'Finished' });
  }
}
