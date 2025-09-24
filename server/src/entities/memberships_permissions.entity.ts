import { Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { ChatPermission } from './chatPermissions.entity';
import { Membership } from './memberships.entity';

@Entity({ name: 'memberships_permissions' })
export class MembershipsPermissions {
  @PrimaryColumn()
  membershipId: string;

  @PrimaryColumn()
  permissionId: string;

  @ManyToOne(() => Membership, (membership) => membership.permissions)
  @JoinColumn({ name: 'membershipId' })
  membership: Membership;

  @ManyToOne(() => ChatPermission, (cp) => cp.memberships)
  @JoinColumn({ name: 'permissionId' })
  permission: ChatPermission;
}
