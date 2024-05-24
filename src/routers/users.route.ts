import express from "express";
import { usersController } from "../controllers";

const usersRouter = express.Router();

usersRouter.get("/", usersController.list);
usersRouter.post("/", usersController.create);
usersRouter.get("/:id", usersController.find);
usersRouter.put("/:id", usersController.update);
usersRouter.delete("/:id", usersController.destroy);
usersRouter.put("/:id/permissions", usersController.updatePermission);

export { usersRouter };
