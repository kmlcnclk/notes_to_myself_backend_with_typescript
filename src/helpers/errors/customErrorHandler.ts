import { NextFunction, Request, Response } from 'express';
import CustomError from './CustomError';
// import log from '../../tools';

interface CustomErrorType {
  name: string;
  code?: number;
  message: string;
  status: number;
  errno?: number;
}

// Custom error handler
const customErrorHandler = (
  err: CustomErrorType,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let customError = err;

  if (err.name === 'SyntaxError') {
    customError = new CustomError('Unexpected Syntax', 400);
  }
  if (err.name === 'ValidationError') {
    customError = new CustomError(err.message, 400);
  }
  if (err.name === 'CastError') {
    customError = new CustomError('Please provide a valid id', 400);
  }
  if (err.code === 11000) {
    customError = new CustomError(
      'Duplicate Key Found : Check Your Input',
      400
    );
  }
  if (err.name === 'TypeError') {
    customError = new CustomError('Type Error : Please Check Your Input', 400);
  }

  console.error(
    `Name: ${customError.name}, Status Code: ${
      customError.status || 500
    }, Message: ${customError.message}`
  );

  return res.status(customError.status || 500).json({
    success: false,
    message: customError.message,
  });
};

export default customErrorHandler;
