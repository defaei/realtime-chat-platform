import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
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
  @JoinColumn({ name: 'senderId', referencedColumnName: 'id' })
  sender: User;

  @OneToMany(() => Attachment, (attachment) => attachment.message)
  attachments: Attachment[];

  @ManyToOne(() => Chat, (chat) => chat.messages)
  @JoinColumn({ name: 'chatId', referencedColumnName: 'id' })
  chat: Chat;

  @Column({ nullable: true })
  parentMessageId: string;

  @ManyToOne(() => Message, (message) => message.replies, { nullable: true })
  @JoinColumn({ name: 'parentMessageId', referencedColumnName: 'id' })
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
