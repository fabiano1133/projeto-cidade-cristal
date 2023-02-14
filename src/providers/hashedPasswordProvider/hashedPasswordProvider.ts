import { hash } from "bcrypt";

export default function hashedPasswordProvider(password: string, salt: number) {
  const hashedPassword = hash(password, salt);

  return hashedPassword;
}
