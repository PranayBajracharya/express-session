import { query } from "../../config/db";

async function list() {
  const sql = "SELECT * FROM `users`";

  const result = await query(sql);

  return result;
}

async function create() {
  const sql =
    "INSERT INTO users (username, email, password) VALUES ('exampleUser', 'user@example.com', 'hashedPassword');";

  const result = await query(sql);

  return result;
}

const demoService = {
  list,
  create,
};

export { demoService };
