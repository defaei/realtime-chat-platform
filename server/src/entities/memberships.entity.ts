import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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

  @Column({ nullable: false })
  userId: string;

  @Column({ nullable: false })
  chatId: string;

  @OneToMany(() => MembershipsPermissions, (mp) => mp.membership)
  permissions: MembershipsPermissions[];

  @ManyToOne(() => User, (user) => user.memberships)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.memberships)
  @JoinColumn({ name: 'chatId', referencedColumnName: 'id' })
  chat: Chat;
}
