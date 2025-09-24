import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { Permission } from './permissions.entity';
import { Membership } from './memberships.entity';

@Entity({ name: 'memberships_permissions' })
export class MembershipsPermissions {
  @PrimaryColumn()
  membershipId: string;

  @PrimaryColumn()
  permissionId: string;

  @ManyToOne(
    () => Membership,
    (membership) => membership.membershipPermissions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'membershipId' })
  membership: Membership;

  @ManyToOne(
    () => Permission,
    (permission) => permission.membershipPermissions,
    { onDelete: 'CASCADE' },
  )
  @JoinColumn({ name: 'permissionId' })
  permission: Permission;
}
