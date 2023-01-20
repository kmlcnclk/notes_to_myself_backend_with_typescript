import express, { Router } from 'express';
import {
  login,
  register,
  logout,
  profile,
} from '../controllers/user.controller';
import { registerSchema, loginSchema } from '../middlewares/yup/user.yup';
import validate from '../middlewares/yup/validate';
import { getAccessToRoute } from '../middlewares/auth';

const userRouter: Router = express.Router();

userRouter.post('/register', validate(registerSchema), register);
userRouter.post('/login', validate(loginSchema), login);
userRouter.get('/logout', [getAccessToRoute], logout);
userRouter.get('/profile', [getAccessToRoute], profile);

export default userRouter;
