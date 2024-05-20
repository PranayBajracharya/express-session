import { query } from "../../config/db";

async function list() {
  const sql = "SELECT * FROM `users`";

  const result = await query({ sql });

  return result;
}

async function create() {
  const sql =
    "INSERT INTO users (username, email, password) VALUES ('exampleUser1', 'user1@example.com', 'hashedPassword');";

  const result = await query({ sql });

  return result;
}

export const usersService = {
  list,
  create,
};
