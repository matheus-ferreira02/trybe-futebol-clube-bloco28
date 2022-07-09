import { Request, Response, NextFunction } from 'express';
import MatchService from '../services/match';

export default class MatchController {
  constructor(private service: MatchService) {}

  public async get(req: Request, res: Response) {
    const matches = await this.service.get();

    return res.status(200).json(matches);
  }

  public async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { homeTeam, awayTeam, homeTeamGoals, awayTeamGoals } = req.body;

      const createdMatch = await this.service
        .create({ homeTeam, awayTeam, homeTeamGoals, awayTeamGoals });

      return res.status(201).json(createdMatch);
    } catch (error) {
      next(error);
    }
  }

  public async finish(req: Request, res: Response) {
    const { id } = req.params;

    await this.service.finish(Number(id));

    return res.status(200).json({ message: 'Finished' });
  }

  public async update(req: Request, res: Response) {
    const { id } = req.params;
    const { homeTeamGoals, awayTeamGoals } = req.body;

    await this.service.update(Number(id), homeTeamGoals, awayTeamGoals);

    return res.status(200).json({ message: 'Updated' });
  }
}
