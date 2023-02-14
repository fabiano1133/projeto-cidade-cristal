import { Router } from "express";
import isAuthenticated from "../../../shared/infra/http/middlewares/isAuthenticated";
import CreateUserController from "../controllers/CreateUserController";
import FindUserByIdController from "../controllers/FindUserByIdController";
import ListAllUsersController from "../controllers/ListAllUsersController";

export const usersRoutes = Router();

const listAllUsersController = new ListAllUsersController();
const createUserController = new CreateUserController();
const findUserByIdController = new FindUserByIdController();

usersRoutes.get("/list-users", isAuthenticated, listAllUsersController.handle);
usersRoutes.post("/create-user", createUserController.handle);
usersRoutes.get(
  "/find-user/:id",
  isAuthenticated,
  findUserByIdController.handle
);
