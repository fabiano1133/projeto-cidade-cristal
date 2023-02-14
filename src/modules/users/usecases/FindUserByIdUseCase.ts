import { inject, injectable } from "tsyringe";
import GenerateQRCodeProvider from "../../../providers/qr-code/generateQRCode";
import CustomException from "../../../shared/err/CustomException";
import IOutputUserById from "../DTOs/IOutputUserById";
import { UserRepository } from "../repositories/Implementations/UserRepository";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export default class FindUserByIdUseCase {
  constructor(
    @inject(UserRepository)
    private userRepository: IUserRepository
  ) {}

  async execute(id: string): Promise<IOutputUserById> {
    const user = await this.userRepository.findById(id);

    await this.userRepository.updateLastLogin(user.id, new Date());

    if (!user) throw new CustomException("Usuário não encontrado!", 404);

    const userResponseFinal = {
      id: user.id,
      fullname: `${user.firstname} ${user.lastname}`,
      email: user.email,
      cars: user.cars,
      propriedade: user.propriedade,
    };

    return userResponseFinal;
  }
}
