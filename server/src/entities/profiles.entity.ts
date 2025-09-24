import { Column, Entity, JoinColumn, OneToOne, PrimaryColumn } from 'typeorm';
import { User } from './users.entity';

@Entity({ name: 'profiles' })
export class Profile {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: true })
  firstname: string;

  @Column({ nullable: true })
  lastname: string;

  @Column({ nullable: true })
  bio: string;

  @Column({ nullable: true })
  avatarUrl: string;

  @Column({ nullable: true })
  dateOfBirth: string;

  @Column({ nullable: false })
  userId: string;

  @OneToOne(() => User, (user) => user.profile)
  @JoinColumn({ name: 'userId', referencedColumnName: 'id' })
  user: User;
}
