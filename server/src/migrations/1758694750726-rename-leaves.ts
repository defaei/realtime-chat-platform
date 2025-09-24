import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameLeaves1758694750726 implements MigrationInterface {
  name = 'RenameLeaves1758694750726';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('memberships', 'leavesAt', 'leftAt');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameColumn('memberships', 'leftAt', 'leavesAt');
  }
}
