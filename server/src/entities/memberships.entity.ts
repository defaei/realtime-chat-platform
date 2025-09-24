import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Chat } from './chats.entity';
import { MembershipsPermissions } from './memberships_permissions.entity';

@Entity({ name: 'memberships' })
export class Membership {
  @PrimaryColumn()
  id: string;

  @CreateDateColumn()
  joinedAt: Date;

  @DeleteDateColumn()
  leftAt: Date;

  @OneToMany(() => MembershipsPermissions, (mp) => mp.membership)
  permissions: MembershipsPermissions[];

  @ManyToOne(() => User, (user) => user.memberships)
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.memberships)
  chat: Chat;
}
