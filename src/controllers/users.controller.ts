import { Request, Response } from "express";
import { usersService } from "../services";

async function list(req: Request, res: Response) {
  const data = await usersService.list();

  return res.json({
    data,
  });
}

async function create(req: Request, res: Response) {
  const data = await usersService.create();

  return res.json({
    data,
  });
}

export const usersController = {
  list,
  create,
};
