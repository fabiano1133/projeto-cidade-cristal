import { inject, injectable } from "tsyringe";
import SecurityGuardsRepository from "../repositories/implementations/SecurityGuardsRepository";
import ISecurityGuardsRepository from "../repositories/ISecurityGuardsRepository";
import CustomException from "../../../shared/err/CustomException";
import hashedPasswordProvider from "../../../providers/hashedPasswordProvider/hashedPasswordProvider";
import { ICreateSecurityGuardsDTO } from "../DTOs/IRequestSecurityGuardsDTO";

@injectable()
export default class CreateSecurityGuardsUseCase {
  constructor(
    @inject(SecurityGuardsRepository)
    private securityGuardsRepository: ISecurityGuardsRepository
  ) {}

  async execute({
    firstname,
    lastname,
    email,
    contact,
    password,
    confirmPassword,
  }: ICreateSecurityGuardsDTO): Promise<void> {
    const securityGuards = await this.securityGuardsRepository.findByEmail(
      email
    );

    if (securityGuards)
      throw new CustomException("Segurança já cadastrado.", 400);

    if (password !== confirmPassword)
      throw new CustomException("Senhas não conferem.", 400);

    const hashedPassword = await hashedPasswordProvider(password, 8);

    await this.securityGuardsRepository.create({
      firstname,
      lastname,
      email,
      contact,
      password: hashedPassword,
      confirmPassword: hashedPassword,
    });
  }
}
