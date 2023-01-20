import { Request, Response, NextFunction } from 'express';
import User from '../databases/models/User.model';
import CustomError from '../helpers/errors/CustomError';
import expressAsyncHandler from 'express-async-handler';
import { comparePassword } from '../helpers/auth/password.helper';
import { sendJwtToClient } from '../helpers/auth/token.helper';

// Register
export const register = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { firstName, lastName, email, password } = req.body;

    try {
      const user = await User.create({
        firstName,
        lastName,
        email,
        password,
      });

      sendJwtToClient(user, res, 'register');
    } catch (err) {
      return next(new CustomError('This email has already taken', 400));
    }
  }
);

// Login
export const login = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email }).select('+password');

    if (!user) {
      return next(new CustomError('This user is not available', 404));
    }

    if (!comparePassword(password, user.password)) {
      return next(new CustomError('Your password is not correct', 400));
    }

    sendJwtToClient(user, res, 'login');
  }
);

// Logout
export const logout = expressAsyncHandler((req: Request, res: Response) => {
  const { NODE_ENV } = process.env;

  res
    .status(200)
    .clearCookie('access_token')
    // @ts-ignore
    .cookie({
      httpOnly: true,
      expires: new Date(Date.now()),
      secure: NODE_ENV === 'development' ? false : true,
    })
    .json({
      success: true,
      message: 'Logout Successful',
    });
});

// Profile
export const profile = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction): Promise<any> => {
    // @ts-ignore
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return next(new CustomError('This user is not available', 400));
    }

    return res.status(200).json({
      success: true,
      user,
    });
  }
);
