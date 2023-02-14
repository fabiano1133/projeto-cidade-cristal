import { Schema, model } from "mongoose";
import { ICreateSecurityGuardsDTO } from "../DTOs/IRequestSecurityGuardsDTO";

const securityGuardsSchema = new Schema<ICreateSecurityGuardsDTO>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  contact: { type: Object, required: true },
  password: { type: String, required: true },
  confirmPassword: { type: String, required: true },
});

const securityGuardsModel = model<ICreateSecurityGuardsDTO>(
  "SecutiryGuards",
  securityGuardsSchema
);

export default securityGuardsModel;
