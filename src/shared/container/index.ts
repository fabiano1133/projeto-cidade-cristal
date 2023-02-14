import { container } from "tsyringe";
import SecurityGuardsRepository from "../../modules/security-guards/repositories/implementations/SecurityGuardsRepository";
import ISecurityGuardsRepository from "../../modules/security-guards/repositories/ISecurityGuardsRepository";
import { UserRepository } from "../../modules/users/repositories/Implementations/UserRepository";
import { IUserRepository } from "../../modules/users/repositories/IUserRepository";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);

container.registerSingleton<ISecurityGuardsRepository>(
  "SecurityGuardsRepository",
  SecurityGuardsRepository
);
