import { inject, injectable } from "tsyringe";
import GenerateQRCodeProvider from "../../../providers/qr-code/generateQRCode";
import ICreateUserDTO from "../DTOs/ICreateUserDTO";
import { UserRepository } from "../repositories/Implementations/UserRepository";
import path from "path";
import CustomException from "../../../shared/err/CustomException";

@injectable()
export default class UserCreateUseCase {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository
  ) {}
  async execute({
    id,
    firstname,
    lastname,
    email,
    cars,
    propriedade,
    qrCode,
  }: ICreateUserDTO): Promise<ICreateUserDTO> {
    try {
      const generateQRCode = new GenerateQRCodeProvider(this.userRepository);

      const userAlreadyExists = await this.userRepository.findByEmail(email);

      const findPlaca = cars.filter((car) => car.placa);

      for (const car of findPlaca) {
        const carPlacaAlreadyExists = await this.userRepository.findByPlaca(
          car.placa
        );

        if (carPlacaAlreadyExists)
          throw new CustomException("Carro já cadastrado!", 400);
      }

      if (userAlreadyExists)
        throw new CustomException("Usuário já cadastrado!", 400);

      const dirPath = path.resolve(__dirname, "..", "qr-code", "tmp");

      const user = await this.userRepository.create({
        id,
        firstname,
        lastname,
        email,
        cars,
        propriedade,
        qrCode: dirPath,
      });

      await generateQRCode.generate(`${user.id}`);

      return user;
    } catch (error: any) {
      throw new CustomException(error.message, 400);
    }
  }
}
