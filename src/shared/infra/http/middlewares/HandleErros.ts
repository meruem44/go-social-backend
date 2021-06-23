import { AppError } from "@shared/errors/AppError";
import { Request, Response, NextFunction, response } from "express";

function handleErrors(
  err: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: "Error",
      message: err.message,
    });
  }

  console.log(err);

  return response.status(500).json({
    status: "Internal server error",
    message: err.message,
  });
}

export { handleErrors };
