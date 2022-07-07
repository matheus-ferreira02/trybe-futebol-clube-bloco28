import * as bcrypt from 'bcryptjs';
import IUser from '../protocols/IUser';
import User from '../database/models/user';

export default class LoginService {
  private model = User;

  public async sigIn(email: string, password: string): Promise<string> {
    const user = await this.model.findOne({ where: { email } }) as IUser;

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) console.log('deu ruim');

    return 'ola';
  }
}
