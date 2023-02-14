import "reflect-metadata";
import express from "express";
import { routes } from "./shared/infra/http/routes";
import errorsProvider from "./providers/errorsProvider";

export const app = express();

app.use(express.json());

app.use(routes);

app.use(errorsProvider);
