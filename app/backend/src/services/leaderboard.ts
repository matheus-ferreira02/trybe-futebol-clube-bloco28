import { awayMatches, homeMatches, allMatches } from '../protocols/ITeamLeaderboard';
import Team from '../database/models/team';
import Match from '../database/models/match';
import BuildLeaderboardHome from '../utils/buildLeaderboardHome';
import Serialize from '../utils/serialize';
import UtilsLeaderboard from '../utils/utilsLeaderboard';
import BuildLeaderboardAway from '../utils/buildLeaderboardAway';
import BuildLeaderboard from '../utils/buildLeaderboard';

export default class LeaderBoardService {
  private model = Team;

  public async getHomeMatch() {
    const teamMatches = await this.model.findAll({ include: {
      model: Match,
      as: 'matchHome',
      where: { inProgress: false },
    } }) as unknown as homeMatches[];

    const matchesSerialize = Serialize.homeMatch(teamMatches);
    const boardFormatted = matchesSerialize.map((team) => new BuildLeaderboardHome(team));

    const sortBoard = UtilsLeaderboard.orderTable(boardFormatted);

    return sortBoard;
  }

  public async getAwayMatch() {
    const teamMatches = await this.model.findAll({ include: {
      model: Match,
      as: 'matchAway',
      where: { inProgress: false },
    } }) as unknown as awayMatches[];

    const matchesSerialize = Serialize.awayMatch(teamMatches);

    const boardFormatted = matchesSerialize.map((team) => new BuildLeaderboardAway(team));

    const sortBoard = UtilsLeaderboard.orderTable(boardFormatted);

    return sortBoard;
  }

  public async getAllMatches() {
    const teamMatches = await this.model.findAll({ include: [{
      model: Match,
      as: 'matchAway',
      where: { inProgress: false },
    }, {
      model: Match,
      as: 'matchHome',
      where: { inProgress: false },
    }] }) as unknown as allMatches[];

    const boardFormatted = teamMatches.map((team) => new BuildLeaderboard(team));

    const sortBoard = UtilsLeaderboard.orderTable(boardFormatted);

    return sortBoard;
  }
}
