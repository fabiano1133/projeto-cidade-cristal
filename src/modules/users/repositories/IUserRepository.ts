import ICreateUserDTO from "../DTOs/ICreateUserDTO";
import { IOutputUser } from "../DTOs/IOutputUser";

export interface IUserRepository {
  findAll(): Promise<IOutputUser[]>;
  create(data: ICreateUserDTO): Promise<ICreateUserDTO>;
  findByEmail(email: string): Promise<IOutputUser>;
  findByPlaca(placa: string): Promise<IOutputUser>;
  findById(id: string): Promise<IOutputUser>;
  updateLastLogin(id: string, date: Date): Promise<any>;
}
