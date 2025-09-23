import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'permissions' })
export class Permission {
  @PrimaryColumn()
  id: string;

  @Column({ nullable: false, unique: true })
  name: string;
}
