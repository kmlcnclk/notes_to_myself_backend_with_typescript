import express, { Router } from 'express';
import userRouter from './user.router';
import noteRouter from './note.router';

const mainRouter: Router = express.Router();

mainRouter.use('/user', userRouter);
mainRouter.use('/note', noteRouter);

export default mainRouter;
