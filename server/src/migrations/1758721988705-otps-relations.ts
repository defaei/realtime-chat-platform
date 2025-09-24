import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export class OtpsRelations1758721988705 implements MigrationInterface {
  name = 'OtpsRelations1758721988705';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'otps',
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        name: 'FK_OTPS_USERID',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('otps', 'FK_OTPS_USERID');
  }
}
