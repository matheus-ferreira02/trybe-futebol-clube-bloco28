import IMatch from '../protocols/IMatch';
import Match from '../database/models/match';
import Team from '../database/models/team';
import GenerateError from '../utils/createObjError';
import TeamService from './team';

export default class MatchService {
  private model = Match;
  private teamService = new TeamService();

  public async get() {
    const matches = await this.model.findAll({
      include: [{
        model: Team,
        as: 'teamHome',
        attributes: ['teamName'],
      },
      {
        model: Team,
        as: 'teamAway',
        attributes: ['teamName'],
      }],
    });

    return matches;
  }

  private async validateTeams(ids: number[]) {
    if (ids[0] === ids[1]) {
      throw new GenerateError(401, 'It is not possible to create a match with two equal teams');
    }

    const teams = await this.teamService.getByIds(ids);

    if (teams.length !== 2) throw new GenerateError(404, 'There is no team with such id!');
  }

  public async create(dataMatch: IMatch) {
    const { awayTeam, homeTeam } = dataMatch;

    await this.validateTeams([awayTeam, homeTeam]);

    const createdMatch = await this.model
      .create({ ...dataMatch });

    return createdMatch;
  }

  public async finish(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
  }
}
