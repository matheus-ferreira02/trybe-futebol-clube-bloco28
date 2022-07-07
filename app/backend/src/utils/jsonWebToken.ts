import * as jwt from 'jsonwebtoken';
import IUser from '../protocols/IUser';

const decode = (payload: Omit<IUser, 'password'>) => {
  const jwtConfig: jwt.SignOptions = {
    expiresIn: '7d',
    algorithm: 'HS256',
  };

  const token = jwt.sign({ data: payload }, 'a', jwtConfig);

  return token;
};

export default {
  decode,
};
