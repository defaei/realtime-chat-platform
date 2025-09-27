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
import { User } from './users.entity';
import { Membership } from './memberships.entity';
import { Message } from './messages.entity';

@Entity({ name: 'chats' })
export class Chat {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  ownerId: string;

  @Column({ default: false })
  isGroup: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'ownerId', referencedColumnName: 'id' })
  owner: User;

  @OneToMany(() => Membership, (membership) => membership.chat)
  memberships: Membership[];

  @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];
}
