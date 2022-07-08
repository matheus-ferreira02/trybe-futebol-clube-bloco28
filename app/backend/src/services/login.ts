import * as bcrypt from 'bcryptjs';
import IUser from '../protocols/IUser';
import User from '../database/models/user';
import jwtUtils from '../utils/jsonWebToken';
import GenerateError from '../utils/createObjError';

export default class LoginService {
  private model = User;

  public async sigIn(emailRequest: string, password: string): Promise<string> {
    const user = await this.model.findOne({ where: { email: emailRequest } }) as IUser;

    if (!user) throw new GenerateError(401, 'Incorrect email or password');

    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) throw new GenerateError(401, 'Incorrect email or password');

    const { id, email, username, role } = user;

    const token = jwtUtils.generateToken({ id, email, username, role });

    return token;
  }
}
