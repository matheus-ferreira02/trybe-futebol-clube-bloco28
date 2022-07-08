import ITeam from '../protocols/ITeam';
import Team from '../database/models/team';

export default class TeamService {
  private model = Team;

  public async get(): Promise<ITeam[]> {
    const teams = await this.model.findAll() as ITeam[];

    return teams;
  }
}
