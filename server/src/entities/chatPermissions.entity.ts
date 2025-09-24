import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { MembershipsPermissions } from './memberships_permissions.entity';

@Entity({ name: 'permissions' })
export class ChatPermission {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;

  @OneToMany(() => MembershipsPermissions, (mp) => mp.permission)
  memberships: MembershipsPermissions[];
}
