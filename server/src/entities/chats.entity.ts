import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { User } from './users.entity';
import { ChatParticipant } from './chat-participants.entity';
import { Message } from './messages.entity';

@Entity({ name: 'chats' })
export class Chat {
  @PrimaryColumn()
  id: string;

  @ManyToOne(() => User)
  owner: User;

  @Column({ default: false })
  isGroup: boolean;

  @OneToMany(() => ChatParticipant, (cp) => cp.chat)
  participants: ChatParticipant[];

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
