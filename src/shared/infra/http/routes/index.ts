import { Router } from "express";
import { securityGuardsRoutes } from "../../../../modules/security-guards/routes";
import { usersRoutes } from "../../../../modules/users/routes";

export const routes = Router();

routes.use("/user", usersRoutes);
routes.use("/security-guard", securityGuardsRoutes);
