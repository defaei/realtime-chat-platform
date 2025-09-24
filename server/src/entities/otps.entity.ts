import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'otps' })
export class Otp {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  userId: string;

  @ManyToOne(() => User, (user) => user.otps)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;

  @Column({ nullable: false })
  code: string;

  @CreateDateColumn()
  createdAt: Date;
}
