import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Users } from "./User.entity";
import { Permission } from "./Permission.entity";

@Entity({ name: "user_permissions" })
export class UserPermission {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column({ name: "user_id" })
  public userId!: number;

  @Column({ name: "permission_id" })
  public permissionId!: number;

  @ManyToOne(() => Users, (user) => user.userPermissions)
  @JoinColumn({ name: "user_id" })
  user!: Users;

  @ManyToOne(() => Permission, (permission) => permission.userPermissions)
  @JoinColumn({ name: "permission_id" })
  permission!: Permission;
}
