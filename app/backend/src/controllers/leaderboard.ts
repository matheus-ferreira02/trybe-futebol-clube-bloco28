import { Request, Response } from 'express';
import LeaderBoardService from '../services/leaderboard';

export default class LeaderBoardController {
  constructor(private service: LeaderBoardService) {}

  public async getHomeMatch(req: Request, res: Response) {
    const teamMatches = await this.service.getHomeMatch();

    return res.status(200).json(teamMatches);
  }
}
