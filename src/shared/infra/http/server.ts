import "reflect-metadata";
import dotenv from "dotenv";
dotenv.config();
import { app } from "../../../app";
import { connect } from "../../../config/database";

connect();

const port = process.env.API_PORT;

app.listen(port, () => console.log(`Server is running on port ${port}`));
