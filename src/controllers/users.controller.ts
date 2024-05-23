import { Request, Response } from "express";
import { usersService } from "../services";

async function list(req: Request, res: Response) {
  const data = await usersService.list();

  return res.status(200).json({
    data,
  });
}

async function create(req: Request, res: Response) {
  const { username, email, password } = req.body;
  const data = await usersService.create({ username, email, password });

  return res.json({
    data,
  });
}

export const usersController = {
  list,
  create,
};
