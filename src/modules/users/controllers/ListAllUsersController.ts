import { Request, Response } from "express";
import { container } from "tsyringe";
import ListAllUsersUseCase from "../usecases/ListAllUsersUseCase";

export default class ListAllUsersController {
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const listAllUsersUseCase = container.resolve(ListAllUsersUseCase);

    const users = await listAllUsersUseCase.execute();

    return response.json(users);
  }
}
