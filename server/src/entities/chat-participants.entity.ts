import ChatRoleEnum from 'src/enums/chat-role';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { User } from './users.entity';
import { Chat } from './chats.entity';

@Entity({ name: 'chat-participants' })
export class ChatParticipant {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'enum', enum: ChatRoleEnum, default: ChatRoleEnum.Member })
  role: ChatRoleEnum;

  @CreateDateColumn()
  joinedAt: Date;

  @DeleteDateColumn()
  leavesAt: Date;

  @ManyToOne(() => User, (user) => user.chatConnections)
  user: User;

  @ManyToOne(() => Chat, (chat) => chat.participants)
  chat: Chat;
}
