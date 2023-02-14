import { Request, Response } from "express";
import { container } from "tsyringe";
import SigninSecurityGuardsUseCase from "../usecases/SigninSecurityGuardsUseCase";

export default class ISigninSecurityGuardsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const signinSecurityGuardsUseCase = container.resolve(
      SigninSecurityGuardsUseCase
    );

    const { email, password } = request.body;

    try {
      const securityGuards = await signinSecurityGuardsUseCase.execute({
        email,
        password,
      });
      return response.status(200).json(securityGuards);
    } catch (error: any) {
      return response.status(400).json({ error: error.message });
    }
  }
}
