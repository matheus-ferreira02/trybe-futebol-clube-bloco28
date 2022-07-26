import * as jwt from 'jsonwebtoken';
import * as dotenv from 'dotenv';
import IUser from '../protocols/IUser';

dotenv.config();
const secret: jwt.Secret = process.env.JWT_SECRET as string;

const generateToken = (payload: Omit<IUser, 'password'>) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, secret, jwtConfig);

  return token;
};

const decodeToken = (token: string) => jwt.verify(token, secret);

export default {
  generateToken,
  decodeToken,
};
