import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameMembershipColumns1758694451852
  implements MigrationInterface
{
  name = 'RenameMembershipColumns1758694451852';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('memberships', 'role');
    await queryRunner.renameColumn('memberships', 'joinsAt', 'joinedAt');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('memberships', 'joinedAt', 'joinsAt');
  }
}
