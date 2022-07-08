import ITeam from '../protocols/ITeam';
import Team from '../database/models/team';

export default class TeamService {
  private model = Team;

  public async get(): Promise<ITeam[]> {
    const teams = await this.model.findAll() as ITeam[];

    return teams;
  }

  public async getById(id: number): Promise<ITeam> {
    const team = await this.model.findByPk(id) as ITeam;

    return team;
  }

  public async getByIds(ids: number[]) {
    const team = await this.model.findAll({ where: { id: ids } }) as ITeam[];

    return team;
  }
}
