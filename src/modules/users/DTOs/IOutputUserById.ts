import ICreateCarDTO from "./ICreateCarDTO";
import ICreatePropertyDTO from "./ICreateProperty";

export default interface IOutputUserById {
  id: string;
  fullname: string;
  email: string;
  cars: ICreateCarDTO[];
  propriedade: ICreatePropertyDTO;
}
