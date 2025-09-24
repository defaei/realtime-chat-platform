import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameTables1758694132628 implements MigrationInterface {
  name = 'RenameTables1758694132628';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('permissions', 'chatPermissions');
    await queryRunner.renameTable('chats_participants', 'memberships');
    await queryRunner.renameTable(
      'participants_permissions',
      'memberships_pemissions',
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.renameTable('chatPermissions', 'permissions');
    await queryRunner.renameTable('memberships', 'chats_participants');
    await queryRunner.renameTable(
      'memberships_pemissions',
      'participants_permissions',
    );
  }
}
