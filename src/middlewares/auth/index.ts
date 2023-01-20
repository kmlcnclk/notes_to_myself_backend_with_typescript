import { NextFunction, Request, Response } from 'express';
import expressAsyncHandler from 'express-async-handler';
import {
  isTokenIncluded,
  getAccessTokenFromHeader,
} from '../../helpers/auth/token.helper';
import CustomError from '../../helpers/errors/CustomError';
import jwt from 'jsonwebtoken';
import User from '../../databases/models/User.model';

// Get access to route
export const getAccessToRoute = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { JSON_SECRET_KEY } = process.env;

  if (!isTokenIncluded(req)) {
    return next(
      new CustomError('You are not authorized to access this route', 401)
    );
  }

  const accessToken = getAccessTokenFromHeader(req);
  jwt.verify(
    accessToken,
    JSON_SECRET_KEY as string,
    (err: any, decoded: any) => {
      if (err) {
        return next(
          new CustomError('You are not authorized to access this route', 401)
        );
      }

      //@ts-ignore
      req.user = {
        id: decoded.id,
        email: decoded.email,
      };

      next();
    }
  );
};

export const isUserAvailable = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return next(new CustomError('This user is not available', 404));
    }

    next();
  }
);
