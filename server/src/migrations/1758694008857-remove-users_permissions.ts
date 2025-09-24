import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class RemoveUsersPermissions1758694008857 implements MigrationInterface {
  name = 'RemoveUsersPermissions1758694008857';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_permissions');
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users_permissions',
        columns: [
          {
            name: 'userId',
            type: 'varchar',
            isPrimary: true,
          },
          {
            name: 'permissionId',
            type: 'varchar',
            isPrimary: true,
          },
        ],
      }),
    );
    await queryRunner.createForeignKeys('users_permissions', [
      new TableForeignKey({
        columnNames: ['userId'],
        referencedTableName: 'users',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['permissionId'],
        referencedTableName: 'permissions',
        referencedColumnNames: ['id'],
        onDelete: 'CASCADE',
      }),
    ]);
  }
}
