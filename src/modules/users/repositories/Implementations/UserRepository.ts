import ICreateUserDTO from "../../DTOs/ICreateUserDTO";
import { IUserRepository } from "../IUserRepository";
import userModel from "../../schemas/userSchema";
import { IOutputUser } from "../../DTOs/IOutputUser";

export class UserRepository implements IUserRepository {
  async updateLastLogin(id: string, date: Date): Promise<any> {
    await userModel.updateOne({ _id: id }, { $set: { last_login: date } });
  }
  async findById(id: string): Promise<IOutputUser> {
    const user = await userModel.findById(id);

    return user as IOutputUser;
  }
  async findByPlaca(placa: string): Promise<IOutputUser> {
    const user = await userModel.findOne({ "cars.placa": placa });

    return user as IOutputUser;
  }
  async findByEmail(email: string): Promise<IOutputUser> {
    const user = await userModel.findOne({ email });

    return user as IOutputUser;
  }
  async create({
    firstname,
    lastname,
    email,
    cars,
    propriedade,
    qrCode,
  }: ICreateUserDTO): Promise<ICreateUserDTO> {
    const user = await userModel.create({
      firstname,
      lastname,
      email,
      cars,
      propriedade,
      qrCode,
    });

    return user;
  }
  async findAll(): Promise<IOutputUser[]> {
    return await userModel.find();
  }
}
