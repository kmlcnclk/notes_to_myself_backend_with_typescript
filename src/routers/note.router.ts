import express, { Router } from 'express';
import {
  createNote,
  isCompleted,
  deleteNoteById,
  getNoteById,
  updateNoteById,
  getAllNotesByUser,
} from '../controllers/note.controller';
import {
  createSchema,
  isCompletedSchema,
  getNoteByIdSchema,
  deleteNoteByIdSchema,
  updateNoteByIdSchema,
} from '../middlewares/yup/note.yup';
import validate from '../middlewares/yup/validate';
import { getAccessToRoute, isUserAvailable } from '../middlewares/auth';

const noteRouter: Router = express.Router();

noteRouter.post(
  '/create',
  [getAccessToRoute, validate(createSchema)],
  createNote
);
noteRouter.patch(
  '/isCompleted/:id',
  [getAccessToRoute, validate(isCompletedSchema)],
  isCompleted
);
noteRouter.get(
  '/getNoteById/:id',
  [getAccessToRoute, validate(getNoteByIdSchema)],
  getNoteById
);
noteRouter.get(
  '/getAllNotesByUser',
  [getAccessToRoute, isUserAvailable],
  getAllNotesByUser
);
noteRouter.put(
  '/update/:id',
  [getAccessToRoute, validate(updateNoteByIdSchema)],
  updateNoteById
);
noteRouter.delete(
  '/deleteNoteById/:id',
  [getAccessToRoute, validate(deleteNoteByIdSchema)],
  deleteNoteById
);

export default noteRouter;
