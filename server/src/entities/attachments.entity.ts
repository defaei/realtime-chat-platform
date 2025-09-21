import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Message } from './messages.entity';

@Entity({ name: 'attachments' })
export class Attachment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: false })
  path: string;

  @Column({ nullable: false })
  fileSize: number;

  @ManyToOne(() => Message, (message) => message.attachments)
  belongsTo: Message;
}
