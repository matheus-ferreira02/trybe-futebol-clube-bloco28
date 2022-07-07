import User from '../database/models/user';

export default class LoginService {
  private model = User;

  public async sigIn(email: string, password: string): Promise<string> {
    const response = await this.model.findOne({ where: { email, password } });
    console.log(response);

    return 'ola';
  }
}
