import {
  ICreateSecurityGuardsDTO,
  ISigninSecurityGuardsDTO,
} from "../DTOs/IRequestSecurityGuardsDTO";

export default interface ISecurityGuardsRepository {
  create(data: ICreateSecurityGuardsDTO): Promise<void>;
  findByEmail(email: string): Promise<ISigninSecurityGuardsDTO>;
}
