export interface ICreateSecurityGuardsDTO {
  firstname: string;
  lastname: string;
  email: string;
  contact: {
    ddd: string;
    number: string;
  };
  password: string;
  confirmPassword: string;
}

export interface ISigninSecurityGuardsDTO {
  id?: string;
  email: string;
  password: string;
}
