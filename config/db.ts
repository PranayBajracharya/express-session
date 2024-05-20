import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

async function query(options: mysql.QueryOptions) {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
  });
  const [results] = await connection.query(options);

  return results;
}

export { query };
