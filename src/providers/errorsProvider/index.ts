import { NextFunction, Response, Request } from "express";
import "express-async-errors";
import CustomException from "../../shared/err/CustomException";

export default function errorsProvider(
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (error instanceof CustomException) {
    return response.status(error.statusCode).json({
      status: "error",
      error: error.message,
    });
  }
  return response.status(500).json({
    status: "error",
    message: "Internal server error",
  });
}
