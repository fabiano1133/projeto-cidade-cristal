import { Request, Response } from "express";
import { container } from "tsyringe";
import CreateSecurityGuardsUseCase from "../usecases/CreateSecurityGuardsUseCase";

export default class CreateSecurityGuardsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createSecurityGuardsUseCase = container.resolve(
      CreateSecurityGuardsUseCase
    );

    const { firstname, lastname, email, contact, password, confirmPassword } =
      request.body;

    try {
      const securityGuards = await createSecurityGuardsUseCase.execute({
        firstname,
        lastname,
        email,
        contact,
        password,
        confirmPassword,
      });
      return response.status(201).json(securityGuards);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
