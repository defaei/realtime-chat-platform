import ChatRoleEnum from 'src/enums/chat-role';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Chat } from './chats.entity';
import { Permission } from './permissions.entity';

@Entity({ name: 'chat-participants' })
export class ChatParticipant {
  @PrimaryColumn()
  id: string;

  @Column({ type: 'enum', enum: ChatRoleEnum, default: ChatRoleEnum.Member })
  role: ChatRoleEnum;

  @CreateDateColumn()
  joinedAt: Date;

  @DeleteDateColumn()
  leavesAt: Date;

  @ManyToMany(() => Permission)
  @JoinTable()
  userPermissions: Permission[];

  @ManyToOne(() => User, (user) => user.chatConnections)
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.participants)
  chat: Chat;
}
