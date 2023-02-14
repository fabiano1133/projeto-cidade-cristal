import { Request, Response } from "express";
import { container } from "tsyringe";
import FindUserByIdUseCase from "../usecases/FindUserByIdUseCase";

export default class FindUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findUserByIdUseCase = container.resolve(FindUserByIdUseCase);

    try {
      const user = await findUserByIdUseCase.execute(id);

      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
