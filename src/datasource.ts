import "reflect-metadata";
import { DataSource } from "typeorm";
import { Users } from "./entity/User.entity";
import { UserPermission } from "./entity/UserPermission.entity";
import { Permission } from "./entity/Permission.entity";

console.log(process.env.DB_NAME);

export const db = new DataSource({
  type: "mysql",
  host: "express-mysql",
  port: 3306,
  username: "test_user",
  password: "test@123",
  database: "test",
  synchronize: true,
  logging: true,
  // entities: [Users, Permission],
  entities: [Users, Permission, UserPermission],
  subscribers: [],
  migrations: [],
});

db.initialize()
  .then(() => {
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
