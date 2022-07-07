import { Request, Response, NextFunction } from 'express';
import GenerateError from '../utils/createObjError';

export default (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;

  if (!email || !password) return next(new GenerateError(400, 'All fields must be filled'));

  next();
};
