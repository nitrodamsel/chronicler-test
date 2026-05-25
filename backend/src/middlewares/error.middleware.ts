import type { NextFunction, Request, Response } from "express";
import { RESPONSE_MESSAGES } from "../constants/response-messages.js";
import { AppError } from "../lib/errors.js";
import { logger } from "../lib/logger.js";

export function errorHandler(
  err: unknown,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void {
  if (err instanceof AppError) {
    logger.warn({ err, statusCode: err.statusCode }, err.message);

    res.status(err.statusCode).json({
      message: err.message,
      error: err.message,
    });

    return;
  }

  logger.error({ err }, "unexpected error");

  res.status(500).json({
    message: RESPONSE_MESSAGES.internalServerError,
    error: RESPONSE_MESSAGES.internalServerError,
  });
}
