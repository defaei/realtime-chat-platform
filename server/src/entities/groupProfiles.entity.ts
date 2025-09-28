import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { Chat } from './chats.entity';

@Entity({ name: 'groupProfiles' })
export class GroupProfile {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  name: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column()
  chatId: string;

  @OneToOne(() => Chat, (chat) => chat.profile)
  @JoinColumn({ name: 'chatId', referencedColumnName: 'id' })
  chat: Chat;
}
