import { IUserRepository } from "../../modules/users/repositories/IUserRepository";
import QRCode from "qrcode";
import path from "path";

export default class GenerateQRCodeProvider {
  constructor(private userRepository: IUserRepository) {}
  async generate(id: string): Promise<any> {
    const dirPath = path.resolve(__dirname, "..", "qr-code", "tmp");

    const user_id = await this.userRepository.findById(id);

    return await QRCode.toFile(
      `${dirPath}/${user_id.firstname}-${user_id.propriedade.edificio}-${user_id.propriedade.apartamento}${user_id.propriedade.bloco}-${user_id.created_at}.png`,
      `${user_id.id}`,
      {
        type: "png",
        scale: 10,
      }
    );
  }
}
