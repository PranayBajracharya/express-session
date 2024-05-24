import { IntegerType, Repository } from "typeorm";
import { query } from "../../config/db";
import { db } from "../datasource";
import { Users } from "../entity/User.entity";
import { UserPermission } from "../entity/UserPermission.entity";
import { Permission } from "../entity/Permission.entity";

const userRepository = db.getRepository(Users);
const permissionRepository = db.getRepository(Permission);
const userPermissionRepository = db.getRepository(UserPermission);

async function list(): Promise<Users[]> {

  const result = await userRepository.find({
    relations: ["userPermissions.permission"],
  });

  return result;
}

// async function create({
//   username,
//   email,
//   password,
// }: {
//   username: string;
//   email: string;
//   password: string;
// }) {
//   const sql = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`;

//   const result = await query({ sql });

//   return result;
// }

async function create({
  email,
  firstName,
  lastName,
  age,
}: {
  email: string;
  firstName: string;
  lastName: string;
  age: number;
}) {
  const user = userRepository.create({
    email,
    firstName,
    lastName,
    age,
  });

  await userRepository.save(user);

  return user;
}

async function find(userId: number): Promise<Users> {
  const result = await userRepository.findOneOrFail({
    where: { id: userId },
    relations: ["userPermissions.permission"],
  });
  return result;
}

async function update(
  userId: number,
  {
    firstName,
    lastName,
    age,
  }: {
    firstName: string;
    lastName: string;
    age: number;
  }
) {
  const user = await find(userId);

  userRepository.merge(user, {
    firstName,
    lastName,
    age,
  });

  await userRepository.save(user);

  return user;
}

async function destroy(userId: number) {
  const user = await find(userId);
  await userRepository.remove(user);
}

async function updatePermission(
  userId: number,
  { permissionsIds }: { permissionsIds: number[] }
) {
  const user = await find(userId);

  console.log(permissionsIds);
  const userPermission = permissionsIds.map((permissionId) => {
    const permission = new Permission();
    permission.id = permissionId;
    // Object.assign(permission, { id: permissionId });
    const userPermission = new UserPermission();
    userPermission.user = user;
    userPermission.permission = permission;
    return userPermission;
  });

  console.log(user);

  userRepository.merge(user, {
    userPermissions: userPermission,
  });

  return await userRepository.save(user);
}

export const usersService = {
  list,
  create,
  find,
  update,
  destroy,
  updatePermission,
};
