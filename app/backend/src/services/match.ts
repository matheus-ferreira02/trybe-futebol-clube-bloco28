import Match from '../database/models/match';
import Team from '../database/models/team';

export default class MatchService {
  private model = Match;

  public async get() {
    const matches = await this.model.findAll({
      include: {
        model: Team,
        as: 'homeTeam',
      },
    });

    return matches;
  }
}
