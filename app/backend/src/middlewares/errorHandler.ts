import { NextFunction, Request, Response } from 'express';

interface ErrorMiddleware extends Error {
  statusCode: number,
}

export default (err: ErrorMiddleware, _req: Request, res: Response, _next: NextFunction) => {
  if (err.statusCode) return res.status(err.statusCode).json({ message: err.message });

  return res.status(500).json({ message: 'Internal server error' });
};
