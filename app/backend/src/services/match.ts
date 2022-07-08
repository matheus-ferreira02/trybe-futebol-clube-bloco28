import IMatch from '../protocols/IMatch';
import Match from '../database/models/match';
import Team from '../database/models/team';

export default class MatchService {
  private model = Match;

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

  public async create(dataMatch: IMatch) {
    const createdMatch = await this.model
      .create({ ...dataMatch });

    return createdMatch;
  }

  public async finish(id: number) {
    await this.model.update({ inProgress: false }, { where: { id } });
  }
}
