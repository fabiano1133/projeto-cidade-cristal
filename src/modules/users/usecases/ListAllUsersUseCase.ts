import { inject, injectable } from "tsyringe";
import { IOutputUser } from "../DTOs/IOutputUser";
import { UserRepository } from "../repositories/Implementations/UserRepository";
import { IUserRepository } from "../repositories/IUserRepository";

@injectable()
export default class ListAllUsersUseCase {
  constructor(
    @inject(UserRepository)
    private userRepository: IUserRepository
  ) {}

  async execute(): Promise<IOutputUser[]> {
    try {
      const users = await this.userRepository.findAll();

      return users;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }
}
