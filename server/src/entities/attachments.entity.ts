import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Message } from './messages.entity';

@Entity({ name: 'attachments' })
export class Attachment {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  path: string;

  @Column({ nullable: false })
  fileSize: number;

  @Column({ nullable: false })
  messageId: string;

  @ManyToOne(() => Message, (message) => message.attachments)
  @JoinColumn({ name: 'messageId', referencedColumnName: 'id' })
  message: Message;
}
