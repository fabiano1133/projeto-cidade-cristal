import {
  ICreateSecurityGuardsDTO,
  ISigninSecurityGuardsDTO,
} from "../../DTOs/IRequestSecurityGuardsDTO";
import securityGuardsModel from "../../schemas/securityGuardsSchema";
import ISecurityGuardsRepository from "../ISecurityGuardsRepository";

export default class SecurityGuardsRepository
  implements ISecurityGuardsRepository
{
  async findByEmail(email: string): Promise<ISigninSecurityGuardsDTO> {
    const securityGuards = await securityGuardsModel.findOne({ email });

    return securityGuards as ISigninSecurityGuardsDTO;
  }
  async create(data: ICreateSecurityGuardsDTO): Promise<void> {
    await securityGuardsModel.create(data);
  }
}
