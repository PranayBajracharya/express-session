import express from "express";
import { usersController } from "../controllers";

const usersRouter = express.Router();

usersRouter.get("/", usersController.list);
usersRouter.post("/", usersController.create);

export { usersRouter };
