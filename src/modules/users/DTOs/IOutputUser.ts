import ICreateCarDTO from "./ICreateCarDTO";
import ICreatePropertyDTO from "./ICreateProperty";

export interface IOutputUser {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  cars: ICreateCarDTO[];
  propriedade: ICreatePropertyDTO;
  created_at: Date;
  last_login: Date;
}
