import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  OneToMany,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { Users } from "./User.entity";
import { UserPermission } from "./UserPermission.entity";
// import { UserPermission } from "./UserPermission.entity";

@Entity()
export class Permission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @OneToMany(() => UserPermission, (userPermission) => userPermission.user)
  userPermissions?: UserPermission[];
}
