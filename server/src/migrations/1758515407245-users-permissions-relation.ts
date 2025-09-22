import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class UsersPermissionsRelation1758515407245
  implements MigrationInterface
{
  name = 'UsersPermissionsRelation1758515407245';

  public async up(queryRunner: QueryRunner): Promise<void> {
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

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users_permissions');
  }
}
