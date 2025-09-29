import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, OneToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { Message } from "./messages.entity";
import { Chat } from "./chats.entity";
import { Membership } from "./memberships.entity";
import { Profile } from "./profiles.entity";
import { Otp } from "./otps.entity";

@Entity({ name: "users" })
export class User {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, unique: true })
  username: string;

  @Column({ nullable: true, unique: true })
  email: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;

  @OneToMany(() => Membership, (membership) => membership.user)
  memberships: Membership[];

  @OneToMany(() => Message, (message) => message.sender)
  messages: Message[];

  @OneToMany(() => Chat, (chat) => chat.owner)
  ownedChats: Chat[];

  @OneToOne(() => Profile, (profile) => profile.user)
  profile: Profile;
}
