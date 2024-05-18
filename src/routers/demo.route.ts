import express from "express";
import { demoController } from "../controllers";
const demoRouter = express.Router();

demoRouter.get("/", demoController.list);
demoRouter.post("/", demoController.create);

export { demoRouter };
