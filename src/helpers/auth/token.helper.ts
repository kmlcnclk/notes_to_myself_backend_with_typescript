import { Request, Response } from 'express';
import { UserDocument } from '../../databases/models/User.model';

// Generate cookie to user
export const sendJwtToClient = (
  user: UserDocument,
  res: Response,
  isRegister: string
) => {
  const token = user.generateJwtFromUser();
  const { NODE_ENV, JWT_COOKIE } = process.env;

  return res
    .status(isRegister === 'register' ? 201 : 200)
    .cookie('access_token', token, {
      httpOnly: true,
      expires: new Date(Date.now() + parseInt(JWT_COOKIE as any) * 1000 * 60),
      secure: NODE_ENV === 'development' ? false : true,
    })
    .json({
      success: true,
      access_token: token,
      user: {
        firstName: user.firstName,
      },
    });
};

export const isTokenIncluded = (req: Request) => {
  return (
    req.headers.authorization && req.headers.authorization.startsWith('Bearer')
  );
};

// Get access token from header
export const getAccessTokenFromHeader = (req: Request) => {
  const authorization: any = req.headers.authorization;
  const access_token = authorization.split(' ')[1];
  return access_token;
};
