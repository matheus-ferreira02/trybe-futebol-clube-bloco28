import Team from '../database/models/team';
import Match from '../database/models/match';

export default class LeaderBoardService {
  private model = Team;

  public async getHomeMatch() {
    const teamMatches = await this.model.findAll({ include: {
      model: Match,
      as: 'matchHome',
      where: { inProgress: false },
    } });

    return teamMatches;
  }
}
