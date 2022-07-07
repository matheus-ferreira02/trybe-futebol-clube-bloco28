import * as bcrypt from 'bcryptjs';
import IUser from '../protocols/IUser';
import User from '../database/models/user';
import jwtUtils from '../utils/jsonWebToken';

export default class LoginService {
  private model = User;

  public async sigIn(emailRequest: string, password: string): Promise<string> {
    const user = await this.model.findOne({ where: { email: emailRequest } }) as IUser;

    const isValid = await bcrypt.compare(password, user.password);
    if (!isValid) console.log('deu ruim');

    const { id, email, username, role } = user;
    const token = jwtUtils.decode({ id, email, username, role });

    return token;
  }
}
