import { Router } from "express";
import CreateSecurityGuardsController from "../controllers/CreateSecurityGuardsController";
import ISigninSecurityGuardsController from "../controllers/ISigninSecurityGuardsController";

const createSecurityGuardsController = new CreateSecurityGuardsController();
const signinSecurityGuardsController = new ISigninSecurityGuardsController();

export const securityGuardsRoutes = Router();

securityGuardsRoutes.post(
  "/create-security-guard",
  createSecurityGuardsController.handle
);

securityGuardsRoutes.post("/signin", signinSecurityGuardsController.handle);
