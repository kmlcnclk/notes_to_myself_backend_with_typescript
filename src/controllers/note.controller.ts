import { Request, Response, NextFunction } from 'express';
import expressAsyncHandler from 'express-async-handler';
import Note from '../databases/models/Note.model';
import CustomError from '../helpers/errors/CustomError';

// Create Note
export const createNote = expressAsyncHandler(
  async (req: Request, res: Response) => {
    const { title, content, isCompleted } = req.body;
    // @ts-ignore
    const { id } = req.user;

    await Note.create({
      title,
      content,
      isCompleted,
      userId: id,
    });

    res.status(201).json({
      success: true,
      message: 'Note successfully created',
    });
  }
);

// is Completed
export const isCompleted = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return next(new CustomError('There are not any note with this id', 404));
    }

    note.isCompleted = !note.isCompleted;
    await note.save();

    res.status(200).json({
      success: true,
      message: 'Note successfully updated',
    });
  }
);

// Get Note By Id
export const getNoteById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return next(new CustomError('This note is not available', 404));
    }

    res.status(200).json({
      success: true,
      note,
    });
  }
);

// Update Note By Id
export const updateNoteById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { title, content, isCompleted } = req.body;
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return next(new CustomError('This note is not available', 404));
    }

    if (title) {
      note.title = await title;
    }

    if (content) {
      note.content = await content;
    }

    note.isCompleted = await isCompleted;

    await note.save();

    res.status(200).json({
      success: true,
      message: 'Note successfully updated',
    });
  }
);

// Delete Note By Id
export const deleteNoteById = expressAsyncHandler(
  async (req: Request, res: Response, next: NextFunction) => {
    const { id } = req.params;

    const note = await Note.findById(id);

    if (!note) {
      return next(new CustomError('This note is not available', 404));
    }

    await note.delete();

    res.status(200).json({
      success: true,
      message: 'Note successfully deleted',
    });
  }
);

// Get all notes by user
export const getAllNotesByUser = expressAsyncHandler(
  async (req: Request, res: Response): Promise<any> => {
    // @ts-ignore
    const { id } = req.user;

    const notes = await Note.find({ userId: id });

    return res.status(200).json({
      success: true,
      notes,
    });
  }
);
