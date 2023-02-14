import { NextFunction, Response, Request } from "express";
import { verify } from "jsonwebtoken";
import { authConfig } from "../../../../config/auth/config";
import CustomException from "../../../err/CustomException";

interface ITokenPayload {
  iat: number;
  ext: number;
  sub: string;
}

export default function isAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new CustomException("Nenhum token recebido", 400);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decodedToken = verify(token, authConfig.jwt.secret);

    const { sub } = decodedToken as ITokenPayload;

    request.headers.user_id = sub;

    return next();
  } catch (error) {
    throw new CustomException("Token inválido.", 400);
  }
}
