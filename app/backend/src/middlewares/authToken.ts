import { Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import GenerateError from '../utils/createObjError';
import IRequestUser from '../protocols/IRequestUser';
import jwtUtils from '../utils/jsonWebToken';

export default (req: IRequestUser, _res: Response, next: NextFunction) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return;

    const userDecoded = jwtUtils.decodeToken(authorization) as jwt.JwtPayload;
    req.user = userDecoded.data;
    return next();
  } catch (error) {
    return next(new GenerateError(401, 'Expired or invalid token'));
  }
};
