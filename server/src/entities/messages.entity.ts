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
import { Attachment } from './attachments.entity';
import { User } from './users.entity';
import { Chat } from './chats.entity';

@Entity({ name: 'messages' })
export class Message {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  content: string;

  @ManyToOne(() => User, (user) => user.messages)
  sender: User;

  @OneToMany(() => Attachment, (attachment) => attachment.belongsTo)
  attachments: Attachment[];

  @ManyToOne(() => Chat, (chat) => chat.messages)
  chat: Chat;

  @ManyToOne(() => Message, (message) => message.replies, { nullable: true })
  parentMessage: Message;

  @OneToMany(() => Message, (message) => message.parentMessage)
  replies: Message[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
