import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class RemoveUsersPassword1758722298096 implements MigrationInterface {
  name = 'RemoveUsersPassword1758722298096';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'password');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'password',
        type: 'varchar',
        isNullable: false,
      }),
    );
  }
}
