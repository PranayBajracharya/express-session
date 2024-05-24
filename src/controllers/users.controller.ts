import { Request, Response } from "express";
import { usersService } from "../services";
import { IntegerType } from "typeorm";

async function list(req: Request, res: Response) {
  const data = await usersService.list();

  return res.json({
    data,
  });
}

async function create(req: Request, res: Response) {
  // const { username, email, password } = req.body;
  const { email, firstName, lastName, age } = req.body;
  const data = await usersService.create({ email, firstName, lastName, age });

  return res.json({
    data,
    message: "Sucessfully Created",
  });
}

async function find(req: Request<{ id: number }>, res: Response) {
  const userId = req.params.id;
  const data = await usersService.find(userId);

  return res.json({
    data,
  });
}

async function update(req: Request<{ id: number }>, res: Response) {
  const userId = req.params.id;
  const { firstName, lastName, age } = req.body;
  const data = await usersService.update(userId, { firstName, lastName, age });

  return res.json({
    data,
    message: "Sucessfully Updated",
  });
}

async function destroy(req: Request<{ id: number }>, res: Response) {
  const userId = req.params.id;

  const data = await usersService.destroy(userId);

  return res.json({
    data,
    message: "Sucessfully Deleted",
  });
}

async function updatePermission(req: Request<{ id: number }>, res: Response) {
  const userId = req.params.id;
  const { permissionsIds } = req.body;
  const data = await usersService.updatePermission(userId, { permissionsIds });

  return res.json({
    message: "Sucessfully Updated Permission",
  });
}

export const usersController = {
  list,
  create,
  find,
  update,
  destroy,
  updatePermission,
};
