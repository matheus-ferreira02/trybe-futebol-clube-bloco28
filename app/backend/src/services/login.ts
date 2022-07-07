import User from '../database/models/user';

export default class LoginService {
  ola = 1;
  public async sigIn(email: string, password: string): Promise<string> {
    const response = await User.findOne({ where: { email, password } });
    console.log(response);
    console.log(this.ola);

    return 'ola';
  }
}
