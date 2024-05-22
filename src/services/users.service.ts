import { query } from "../../config/db";

async function list() {
  const sql = "SELECT * FROM users";

  const result = await query({ sql });

  return result;
}

async function create({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) {
  const sql = `INSERT INTO users (username, email, password) VALUES ('${username}', '${email}', '${password}');`;

  const result = await query({ sql });

  return result;
}

export const usersService = {
  list,
  create,
};
