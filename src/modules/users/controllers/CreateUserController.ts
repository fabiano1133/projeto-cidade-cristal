import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateUseUseCase from "../usecases/CreateUseUseCase";

export default class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { firstname, lastname, email, cars, propriedade, qrCode } =
      request.body;

    const userCreateUseCase = container.resolve(CreateUseUseCase);

    try {
      const user = await userCreateUseCase.execute({
        firstname,
        lastname,
        email,
        cars,
        propriedade,
        qrCode,
      });

      return response.status(201).json(user);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
