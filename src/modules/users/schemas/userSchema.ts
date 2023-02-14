import { Schema, model } from "mongoose";
import ICreateUserDTO from "../DTOs/ICreateUserDTO";

const userSchema = new Schema<ICreateUserDTO>({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true },
  cars: { type: [], required: true },
  propriedade: { type: Object, required: true },
  created_at: { type: Date, required: false, default: Date.now },
  last_login: { type: Date, required: false, default: Date.now },
  qrCode: { type: String, required: false },
});

const userModel = model<ICreateUserDTO>("User", userSchema);

export default userModel;
