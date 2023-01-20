import { Response, Request, NextFunction } from 'express';
import CustomError from '../../helpers/errors/CustomError';
import { AnySchema } from 'yup';
import expressAsyncHandler from 'express-async-handler';

const validate = (schema: AnySchema) =>
  expressAsyncHandler(
    async (req: Request, res: Response, next: NextFunction): Promise<any> => {
      try {
        await schema.validate({
          body: req.body,
          query: req.query,
          params: req.params,
        });
        return next();
      } catch (err: any) {
        return next(new CustomError(err.message, 400));
      }
    }
  );

export default validate;
