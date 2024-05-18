import { Request, Response } from "express";
import { demoService } from "../services";

async function list(req: Request, res: Response) {
  const data = await demoService.list();

  res.json({
    data,
  });
}

async function create(req: Request, res: Response) {
  const data = await demoService.create();

  res.json({
    data,
  });
}

const demoController = {
  list,
  create,
};

export { demoController };
