import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class Otps1758721745208 implements MigrationInterface {
  name = 'Otps1758721745208';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'otps',
        columns: [
          {
            name: 'id',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'userId',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'code',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'createdAt',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('otps');
  }
}
