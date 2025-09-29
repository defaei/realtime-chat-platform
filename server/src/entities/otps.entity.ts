import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { User } from "./users.entity";

@Entity({ name: "otps" })
export class Otp {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  code: string;

  @CreateDateColumn()
  createdAt: Date;
}
