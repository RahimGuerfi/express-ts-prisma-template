import z from 'zod';
import AppError from '../utils/app-error';
import { ErrorRequestHandler } from 'express';
import { config } from '@/config/config';

export const globalErrorHandler: ErrorRequestHandler = (
  err: Error,
  req,
  res,
  next,
) => {
  if (err instanceof z.ZodError) {
    console.log(err.errors);

    const errorMessages = err.errors.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    res.status(400).json({
      message: 'Validation error',
      errors: errorMessages,
      ...(config.environment === 'development' && { stack: err.stack }),
    });
    return;
  }

  if (err instanceof AppError) {
    res.status(err.statusCode).json({
      message: err.message,
      ...(config.environment === 'development' && { stack: err.stack }),
    });
    return;
  }

  res.status(500).json({
    message: err.message,
    ...(config.environment === 'development' && { stack: err.stack }),
  });
};
