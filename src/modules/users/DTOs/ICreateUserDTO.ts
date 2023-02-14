import ICreateCarDTO from "./ICreateCarDTO";
import ICreatePropertyDTO from "./ICreateProperty";

export default interface ICreateUserDTO {
  id?: string;
  firstname: string;
  lastname: string;
  email: string;
  cars: ICreateCarDTO[];
  created_at?: Date;
  last_login?: Date;
  propriedade: ICreatePropertyDTO;
  qrCode?: string;
}
