import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { UserPermission } from "./UserPermission.entity";
import { Permission } from "./Permission.entity";

@Entity()
// @Unique(["email"])
@Unique("unique_users_email", ["email"])
export class Users {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  email!: string;

  @Column()
  firstName!: string;

  @Column()
  lastName!: string;

  @Column()
  age!: number;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
  userPermissions?: UserPermission[];
}
