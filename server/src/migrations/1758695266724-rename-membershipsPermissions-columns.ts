import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameMembershipsPermissionsColumns1758695266724
  implements MigrationInterface
{
  name = 'RenameMembershipsPermissionsColumns1758695266724';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable(
      'memberships_pemissions',
      'memberships_permissions',
    );
    await queryRunner.renameColumn(
      'memberships_permissions',
      'participantId',
      'membershipId',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn(
      'memberships_permissions',
      'membershipId',
      'participantId',
    );
    await queryRunner.renameTable(
      'memberships_permissions',
      'memberships_pemissions',
    );
  }
}
