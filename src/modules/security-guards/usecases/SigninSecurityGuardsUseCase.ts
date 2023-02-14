import { sign } from "jsonwebtoken";
import { authConfig } from "../../../config/auth/config";
import { compare } from "bcrypt";
import ISecurityGuardsRepository from "../repositories/ISecurityGuardsRepository";
import { inject, injectable } from "tsyringe";
import SecurityGuardsRepository from "../repositories/implementations/SecurityGuardsRepository";
import CustomException from "../../../shared/err/CustomException";
import { ISigninSecurityGuardsDTO } from "../DTOs/IRequestSecurityGuardsDTO";
import IResponseSecurityGuardsTokenDTO from "../DTOs/IResponseSecurityGuardsDTO";

@injectable()
export default class SigninSecurityGuardsUseCase {
  constructor(
    @inject(SecurityGuardsRepository)
    private securityGuardsRepository: ISecurityGuardsRepository
  ) {}

  async execute({
    email,
    password,
  }: ISigninSecurityGuardsDTO): Promise<IResponseSecurityGuardsTokenDTO> {
    const user = await this.securityGuardsRepository.findByEmail(email);

    if (!user) {
      throw new CustomException("Email ou Senha incorretos.", 400);
    }

    const passwordMatched = await compare(password, user.password);

    if (!passwordMatched) {
      throw new CustomException("Email ou Senha incorretos.", 400);
    }

    const token = sign({ email: user.email }, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expiresIn,
    });

    return {
      email: user.email,
      token,
    };
  }
}
