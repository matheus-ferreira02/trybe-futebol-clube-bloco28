import Team from '../database/models/team';
import Match from '../database/models/match';
import BuildLeaderboard from '../utils/buildLeaderboard';
import { matchHome } from '../protocols/ITeamLeaderboard';

interface homeMatches extends Team {
  matchHome: matchHome[]
}

export default class LeaderBoardService {
  private model = Team;

  public async getHomeMatch() {
    const teamMatches = await this.model.findAll({ include: {
      model: Match,
      as: 'matchHome',
      where: { inProgress: false },
    } }) as unknown as homeMatches[];

    const formattedTable = teamMatches.map((team) => new BuildLeaderboard(team));

    return formattedTable;
  }
}
